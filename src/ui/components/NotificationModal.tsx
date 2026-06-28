import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  open: boolean
  onClose: () => void
}

const notifications = [
  { id: 1, title: 'New order received', desc: 'Order #1024 from Sarah Ahmed — $240.00', time: '2 min ago', color: 'accent-cyan' },
  { id: 2, title: 'Low stock alert', desc: 'Wireless Mouse is down to 3 units', time: '15 min ago', color: 'accent-warning' },
  { id: 3, title: 'Payment received', desc: 'Invoice #INV-023 — $1,200.00 cleared', time: '1 hr ago', color: 'accent-success' },
  { id: 4, title: 'New vendor registered', desc: 'TechSupply Co. joined your network', time: '3 hr ago', color: 'accent-lavender' },
]

export default function NotificationModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-end p-4 pt-16 sm:pt-20 sm:pr-8" onClick={onClose}>
      <div className="absolute inset-0" />
      <div
        className="relative w-full max-w-sm rounded-2xl border border-white/40 dark:border-white/[0.12] bg-white/80 dark:bg-[#1a1d21]/80 backdrop-blur-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20 dark:border-white/[0.06]">
          <h2 className="text-base font-semibold text-brand-text-primary">Notifications</h2>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center text-brand-text-muted hover:text-brand-text-primary hover:bg-white/30 dark:hover:bg-white/[0.08] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-white/30 dark:hover:bg-white/[0.04] transition-colors cursor-pointer border-b border-white/10 dark:border-white/[0.04] last:border-0">
              <div className={`w-8 h-8 rounded-full bg-${n.color}/20 flex items-center justify-center shrink-0 mt-0.5`}>
                <div className={`w-2 h-2 rounded-full bg-${n.color}`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-brand-text-primary">{n.title}</p>
                <p className="text-xs text-brand-text-muted mt-0.5">{n.desc}</p>
                <p className="text-[10px] text-brand-text-muted/60 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}
