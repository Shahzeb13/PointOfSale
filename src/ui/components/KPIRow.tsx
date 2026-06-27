import { kpiData } from '../../data/dashboardMock'

interface KpiIconProps {
  type: string
  bg: string
  color: string
}

function KpiIcon({ type, bg, color }: KpiIconProps) {
  const cls = `${color}`
  switch (type) {
    case 'cart':
      return (
        <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
          <svg className={cls} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      )
    case 'revenue':
      return (
        <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
          <svg className={cls} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      )
    case 'users':
      return (
        <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
          <svg className={cls} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
      )
    default:
      return null
  }
}

interface KpiItem {
  id: number
  label: string
  value: string
  delta: string
  deltaUp: boolean
  iconBg: string
  iconColor: string
  icon: string
}

export default function KPIRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {kpiData.map((kpi: KpiItem) => (
        <div
          key={kpi.id}
          className="flex items-center gap-5 bg-brand-card backdrop-blur-xl border border-brand-border rounded-card px-6 py-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-200"
          style={{ minHeight: '110px' }}
        >
          <KpiIcon type={kpi.icon} bg={kpi.iconBg} color={kpi.iconColor} />
          <div className="flex-1">
            <p className="text-sm text-brand-text-muted">{kpi.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-brand-text-primary">{kpi.value}</span>
              <span className={`text-sm font-medium flex items-center gap-0.5 ${kpi.deltaUp ? 'text-accent-success' : 'text-accent-warning'}`}>
                {kpi.deltaUp ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15" /></svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
                )}
                {kpi.delta}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
