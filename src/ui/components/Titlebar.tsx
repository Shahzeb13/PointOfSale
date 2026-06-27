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
        <div className="no-drag flex items-center gap-1">
          <button onClick={winCtrls.minimize} className="w-3.5 h-3.5 rounded-full bg-accent-warning hover:brightness-110 transition-all flex items-center justify-center group" title="Minimize">
            <svg className="opacity-0 group-hover:opacity-60 transition-opacity" width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          <button onClick={winCtrls.maximize} className="w-3.5 h-3.5 rounded-full bg-accent-success hover:brightness-110 transition-all flex items-center justify-center group" title="Maximize">
            <svg className="opacity-0 group-hover:opacity-60 transition-opacity" width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
          </button>
          <button onClick={winCtrls.close} className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 hover:brightness-110 transition-all flex items-center justify-center group" title="Close">
            <svg className="opacity-0 group-hover:opacity-60 transition-opacity" width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
