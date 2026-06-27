import { donutSegments } from '../../data/dashboardMock'

interface Segment {
  label: string
  value: number
  color: string
  startAngle: number
  endAngle: number
  angle: number
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

export default function DonutGrid() {
  const cx = 100
  const cy = 100
  const r = 80
  const total = donutSegments.reduce((s, seg) => s + seg.value, 0)
  let currentAngle = 0
  const segments: Segment[] = donutSegments.map((seg) => {
    const angle = (seg.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle
    return { ...seg, startAngle, endAngle, angle }
  })

  return (
    <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
      <h3 className="text-lg font-semibold text-brand-text-primary mb-1">Category Breakdown</h3>
      <p className="text-sm text-brand-text-muted mb-5">Sales distribution by category</p>
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-44 h-44 flex-shrink-0">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {segments.map((seg) => (
              <path
                key={seg.label}
                d={describeArc(cx, cy, r, seg.startAngle, seg.endAngle)}
                fill="none"
                stroke={seg.color}
                strokeWidth="28"
                strokeLinecap="butt"
              />
            ))}
            <circle cx={cx} cy={cy} r={50} fill="var(--brand-card)" stroke="var(--brand-border)" strokeWidth="1" />
            <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--brand-text-primary)" fontSize="22" fontWeight="700" fontFamily="inherit">
              {total}
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" fill="var(--brand-text-muted)" fontSize="11" fontFamily="inherit">
              Categories
            </text>
          </svg>
        </div>
        <div className="w-full space-y-3">
          {segments.map((seg: Segment) => (
            <div key={seg.label} className="flex items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="text-sm text-brand-text-secondary truncate">{seg.label}</span>
              </div>
              <span className="text-sm font-medium text-brand-text-primary shrink-0">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
