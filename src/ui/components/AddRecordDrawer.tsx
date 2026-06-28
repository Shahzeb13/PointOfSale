import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function AddRecordDrawer({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return createPortal(
    <>
      {open && (
        <div className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm" onClick={onClose} />
      )}
      <div
        className={`fixed top-9 right-0 h-[calc(100%-2.25rem)] z-[80] w-full max-w-md bg-white/80 dark:bg-[#1a1d21]/80 backdrop-blur-xl border-l border-white/40 dark:border-white/[0.10] rounded-l-2xl shadow-premium-lg transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/20 dark:border-white/[0.06]">
          <h2 className="text-lg font-semibold text-brand-text-primary">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-brand-text-muted hover:text-brand-text-primary hover:bg-white/20 dark:hover:bg-white/[0.08] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </>,
    document.body
  )
}
