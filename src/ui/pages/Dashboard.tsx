import KPIRow from '../components/KPIRow'
import AnalyticsChart from '../components/AnalyticsChart'
import DonutGrid from '../components/DonutGrid'
import SummaryBreakdown from '../components/SummaryBreakdown'
import ProductLedger from '../components/ProductLedger'

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <KPIRow />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>
        <div>
          <DonutGrid />
        </div>
      </div>

      <SummaryBreakdown />

      <ProductLedger />
    </div>
  )
}
