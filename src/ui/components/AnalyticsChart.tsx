import { weeklyOrders } from '../../data/dashboardMock'

interface Point { x: number; y: number }

function smoothPath(
  data: { orders: number; profit: number; day: string }[],
  key: 'orders' | 'profit',
  width: number,
  height: number,
  padding: number
): string {
  const maxVal = Math.max(...data.map((d) => d[key]))
  const minVal = 0
  const range = maxVal - minVal || 1
  const stepX = (width - padding * 2) / (data.length - 1)

  const points: Point[] = data.map((d, i) => {
    const x = padding + i * stepX
    const y = height - padding - ((d[key] - minVal) / range) * (height - padding * 2)
    return { x, y }
  })

  if (points.length < 2) return ''

  let d = `M${points[0].x},${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i]
    const p1 = points[i + 1]
    const cpx = p0.x + (p1.x - p0.x) / 2
    d += ` C${cpx},${p0.y} ${cpx},${p1.y} ${p1.x},${p1.y}`
  }
  return d
}

export default function AnalyticsChart() {
  const width = 700
  const height = 220
  const padding = 30

  const ordersPath = smoothPath(weeklyOrders, 'orders', width, height, padding)
  const profitPath = smoothPath(weeklyOrders, 'profit', width, height, padding)
  const ordersArea = `${ordersPath} L${width - padding},${height - padding} L${padding},${height - padding} Z`

  return (
    <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-brand-text-primary">Analytics Overview</h3>
          <p className="text-sm text-brand-text-muted">Weekly orders & profit performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-accent-orange" />
            <span className="text-brand-text-secondary">Orders</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-brand-secondary" />
            <span className="text-brand-text-secondary">Profit</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height + 30}`} className="w-full" style={{ minWidth: '500px' }}>
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding + (height - padding * 2) * (1 - ratio)
            return (
              <line key={ratio} x1={padding} y1={y} x2={width - padding} y2={y} stroke="var(--brand-border)" strokeWidth="1" />
            )
          })}

          <path d={ordersArea} fill="rgba(255, 181, 71, 0.08)" />

          <path d={ordersPath} fill="none" stroke="#FFB547" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          <path d={profitPath} fill="none" stroke="var(--color-secondary-400)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {weeklyOrders.map((d, i) => {
            const stepX = (width - padding * 2) / (weeklyOrders.length - 1)
            const x = padding + i * stepX
            return (
              <text key={d.day} x={x} y={height + 15} textAnchor="middle" fill="var(--brand-text-muted)" fontSize="11" fontFamily="inherit">
                {d.day}
              </text>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
