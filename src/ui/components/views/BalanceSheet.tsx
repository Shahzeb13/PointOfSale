import { balanceSheetData } from '../../../data/dashboardMock'

export default function BalanceSheet() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-brand-text-primary">Balance Sheet</h1>
        <p className="text-sm text-brand-text-muted">Multi-year asset, liability, and equity comparison.</p>
      </div>

      <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-brand-text-muted border-b border-brand-border">
                <th className="px-5 py-3 font-medium">Line Item</th>
                <th className="px-5 py-3 text-right font-medium">2025</th>
                <th className="px-5 py-3 text-right font-medium">2026</th>
                <th className="px-5 py-3 text-right font-medium">Change</th>
              </tr>
            </thead>
            <tbody>
              {balanceSheetData.map((row) => {
                const change = row.year2026 - row.year2025
                const changePct = row.year2025 ? ((change / row.year2025) * 100).toFixed(1) : '-'
                return (
                  <tr key={row.lineItem} className={`border-b border-brand-border last:border-0 hover:bg-brand-bg transition-colors ${row.lineItem.startsWith('Total') ? 'bg-brand-bg/50 font-semibold' : ''}`} style={{ height: '52px' }}>
                    <td className="px-5 text-sm text-brand-text-primary">{row.lineItem}</td>
                    <td className="px-5 text-sm text-right text-brand-text-secondary">${row.year2025.toLocaleString()}</td>
                    <td className="px-5 text-sm text-right text-brand-text-primary">${row.year2026.toLocaleString()}</td>
                    <td className={`px-5 text-sm text-right font-medium ${change >= 0 ? 'text-accent-success' : 'text-accent-orange'}`}>
                      {change >= 0 ? '+' : ''}{changePct}%
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
