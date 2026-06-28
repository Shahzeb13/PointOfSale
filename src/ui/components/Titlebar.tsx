interface ElectronWindow {
  minimize: () => void
  maximize: () => void
  close: () => void
}

declare global {
  interface Window {
    electron?: ElectronWindow
  }
}

export default function Titlebar() {
  const winCtrls = window.electron

  return (
    <div className="drag-region relative z-[60] flex items-center justify-between h-9 px-4 bg-white/40 dark:bg-[#1a1d21]/90 backdrop-blur-xl border-b border-white/20 dark:border-white/[0.06] select-none">
      <span className="text-xs font-medium text-brand-text-muted tracking-wide">Posits</span>

      {winCtrls && (
        <div className="no-drag fixed top-0 right-0 z-[110] flex items-center h-9 px-3 gap-1">
          <button onClick={winCtrls.minimize} className="w-8 h-8 flex items-center justify-center text-brand-text-muted hover:text-brand-text-primary hover:bg-white/20 dark:hover:bg-white/[0.08] rounded transition-colors" title="Minimize">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          <button onClick={winCtrls.maximize} className="w-8 h-8 flex items-center justify-center text-brand-text-muted hover:text-brand-text-primary hover:bg-white/20 dark:hover:bg-white/[0.08] rounded transition-colors" title="Maximize">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
          </button>
          <button onClick={winCtrls.close} className="w-8 h-8 flex items-center justify-center text-brand-text-muted hover:text-red-400 hover:bg-red-500/10 rounded transition-colors" title="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
