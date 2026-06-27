import { summaryData } from '../../data/dashboardMock'

interface SummaryItem {
  label: string
  value: string
  subtext: string
}

export default function SummaryBreakdown() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {summaryData.map((item: SummaryItem) => (
        <div key={item.label} className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card px-5 py-4 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
          <p className="text-sm text-brand-text-muted">{item.label}</p>
          <p className="text-2xl font-bold text-brand-text-primary mt-1">{item.value}</p>
          <p className="text-xs text-brand-text-muted mt-1">{item.subtext}</p>
        </div>
      ))}
    </div>
  )
}
