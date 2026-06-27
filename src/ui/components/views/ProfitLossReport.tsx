import { profitLossData } from '../../../data/dashboardMock'

export default function ProfitLossReport() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-brand-text-primary">Profit & Loss Report</h1>
        <p className="text-sm text-brand-text-muted">Revenue vs expenditure matrix for current and previous month.</p>
      </div>

      <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-brand-text-muted border-b border-brand-border">
                <th className="px-5 py-3 font-medium">Line Item</th>
                <th className="px-5 py-3 text-right font-medium">Current Month</th>
                <th className="px-5 py-3 text-right font-medium">Previous Month</th>
                <th className="px-5 py-3 text-right font-medium">Change</th>
              </tr>
            </thead>
            <tbody>
              {profitLossData.map((row) => {
                const prev = Math.abs(row.previousMonth)
                const change = prev ? (((row.currentMonth - row.previousMonth) / prev) * 100).toFixed(1) : '-'
                const isPositive = row.currentMonth >= row.previousMonth
                const isNegativeItem = row.lineItem.includes('COGS') || row.lineItem.includes('Expenses') || row.lineItem.includes('Returns')
                const good = isNegativeItem ? !isPositive : isPositive
                return (
                  <tr key={row.lineItem} className={`border-b border-brand-border last:border-0 hover:bg-brand-bg transition-colors ${row.lineItem.startsWith('Net') || row.lineItem.startsWith('Gross Profit') || row.lineItem.startsWith('Net Revenue') ? 'bg-brand-bg/50 font-semibold' : ''}`} style={{ height: '52px' }}>
                    <td className="px-5 text-sm text-brand-text-primary">{row.lineItem}</td>
                    <td className={`px-5 text-sm text-right font-medium ${row.currentMonth < 0 ? 'text-accent-orange' : 'text-brand-text-primary'}`}>
                      {row.currentMonth < 0 ? '-' : ''}${Math.abs(row.currentMonth).toLocaleString()}
                    </td>
                    <td className={`px-5 text-sm text-right ${row.previousMonth < 0 ? 'text-accent-orange' : 'text-brand-text-secondary'}`}>
                      ${Math.abs(row.previousMonth).toLocaleString()}
                    </td>
                    <td className={`px-5 text-sm text-right font-medium ${good ? 'text-accent-success' : 'text-accent-orange'}`}>
                      {change !== '-' ? (isPositive ? '+' : '') + change + '%' : '-'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
