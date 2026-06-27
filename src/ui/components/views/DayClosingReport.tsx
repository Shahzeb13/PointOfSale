import { dayClosingData } from '../../../data/dashboardMock'

const totalCash = dayClosingData.reduce((s, d) => s + d.cashDeclared, 0)
const totalElectronic = dayClosingData.reduce((s, d) => s + d.electronic, 0)
const totalDiscrepancy = dayClosingData.reduce((s, d) => s + d.discrepancy, 0)

export default function DayClosingReport() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-brand-text-primary">Day Closing Report</h1>
        <p className="text-sm text-brand-text-muted">Reconciliation of register counts and closing discrepancies.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card px-5 py-4 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
          <p className="text-sm text-brand-text-muted">Total Cash Declared</p>
          <p className="text-2xl font-bold text-brand-text-primary mt-1">${totalCash.toLocaleString()}</p>
        </div>
        <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card px-5 py-4 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
          <p className="text-sm text-brand-text-muted">Total Electronic</p>
          <p className="text-2xl font-bold text-brand-text-primary mt-1">${totalElectronic.toLocaleString()}</p>
        </div>
        <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card px-5 py-4 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
          <p className="text-sm text-brand-text-muted">Total Discrepancy</p>
          <p className={`text-2xl font-bold mt-1 ${totalDiscrepancy === 0 ? 'text-accent-success' : 'text-accent-orange'}`}>
            {totalDiscrepancy > 0 ? '+' : ''}{totalDiscrepancy}
          </p>
        </div>
      </div>

      <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-brand-text-muted border-b border-brand-border">
                <th className="px-5 py-3 font-medium">Register</th>
                <th className="px-5 py-3 text-right font-medium">Cash Declared</th>
                <th className="px-5 py-3 text-right font-medium">System Total</th>
                <th className="px-5 py-3 text-right font-medium">Electronic</th>
                <th className="px-5 py-3 text-right font-medium">Discrepancy</th>
              </tr>
            </thead>
            <tbody>
              {dayClosingData.map((d) => (
                <tr key={d.register} className="border-b border-brand-border last:border-0 hover:bg-brand-bg transition-colors" style={{ height: '52px' }}>
                  <td className="px-5 text-sm font-medium text-brand-text-primary">{d.register}</td>
                  <td className="px-5 text-sm text-right text-brand-text-primary">${d.cashDeclared.toLocaleString()}</td>
                  <td className="px-5 text-sm text-right text-brand-text-secondary">${d.systemTotal.toLocaleString()}</td>
                  <td className="px-5 text-sm text-right text-brand-text-primary">${d.electronic.toLocaleString()}</td>
                  <td className={`px-5 text-sm text-right font-medium ${d.discrepancy === 0 ? 'text-accent-success' : d.discrepancy > 0 ? 'text-accent-warning' : 'text-accent-orange'}`}>
                    {d.discrepancy > 0 ? '+' : ''}{d.discrepancy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
