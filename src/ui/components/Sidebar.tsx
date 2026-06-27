import { NavLink } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

interface NavItem {
  label: string
  icon: string
  to?: string
}

const primaryItems: NavItem[] = [
  { label: 'Dashboard', icon: 'grid', to: '/dashboard' },
  { label: 'Orders', icon: 'cart', to: '/orders' },
  { label: 'Products', icon: 'box', to: '/products' },
]

const financialItems: NavItem[] = [
  { label: 'Vendor Details', icon: 'vendor', to: '/vendor-details' },
  { label: 'Customer Details', icon: 'users', to: '/customer-details' },
  { label: 'Invoices', icon: 'invoice', to: '/invoices' },
  { label: 'Expenses', icon: 'expense', to: '/expenses' },
  { label: 'Bank Transactions', icon: 'bank', to: '/bank-transactions' },
]

const reportItems: NavItem[] = [
  { label: 'Inventory', icon: 'inventory', to: '/inventory' },
  { label: 'Balance Sheet', icon: 'balance-sheet', to: '/balance-sheet' },
  { label: 'Profit & Loss', icon: 'profit-loss', to: '/profit-loss' },
  { label: 'Day Closing', icon: 'day-closing', to: '/day-closing' },
]

interface NavIconProps {
  type: string
  active: boolean
}

function NavIcon({ type, active }: NavIconProps) {
  const cls = `w-5 h-5 ${active ? 'text-brand-text-primary' : 'text-brand-text-muted'}`
  const S = (children: React.ReactNode) => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{children}</svg>
  switch (type) {
    case 'grid':
      return S(<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>)
    case 'cart':
      return S(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>)
    case 'box':
      return S(<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>)
    case 'users':
      return S(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>)
    case 'chart':
      return S(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>)
    case 'settings':
      return S(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>)
    case 'vendor':
      return S(<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>)
    case 'invoice':
      return S(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>)
    case 'expense':
      return S(<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>)
    case 'bank':
      return S(<><rect x="2" y="6" width="20" height="12" rx="2" /><line x1="12" y1="12" x2="12" y2="12" /><path d="M2 10h20" /><path d="M9 6v12" /><path d="M15 6v12" /></>)
    case 'inventory':
      return S(<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>)
    case 'balance-sheet':
      return S(<><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="12" y1="9" x2="12" y2="21" /><path d="M6 12h4" /><path d="M14 12h4" /><path d="M6 16h4" /><path d="M14 16h4" /></>)
    case 'profit-loss':
      return S(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></>)
    case 'day-closing':
      return S(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>)
    default:
      return null
  }
}

function NavSection({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="pt-5 first:pt-0">
      <p className="px-5 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-brand-text-muted dark:text-gray-400">{label}</p>
      {items.map((item) => {
        if (item.to) {
          return (
              <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-gray-900'
                    : 'text-brand-text-secondary dark:text-white hover:bg-white/40 dark:hover:bg-white/[0.12] hover:text-brand-text-primary dark:hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <NavIcon type={item.icon} active={isActive} />
                  {item.label}
                </>
              )}
            </NavLink>
          )
        }
        return (
          <span
            key={item.label}
            className="flex items-center gap-3.5 px-5 py-2.5 rounded-full text-sm font-medium text-brand-text-secondary dark:text-white cursor-default"
          >
            <NavIcon type={item.icon} active={false} />
            {item.label}
          </span>
        )
      })}
    </div>
  )
}

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={onClose} />
      )}
      <aside className={`fixed top-0 left-0 h-full z-30 bg-white/35 dark:bg-black/20 backdrop-blur-md border-r border-white/25 dark:border-white/[0.05] shadow-premium-sm transition-all duration-300 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}
        style={{ width: '240px', maxWidth: '260px', minWidth: '220px' }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/20 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-brand-text-primary text-lg">Posits</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-brand-text-muted hover:text-brand-text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
          <NavSection label="Main" items={primaryItems} />
          <NavSection label="Financial" items={financialItems} />
          <NavSection label="Reports" items={reportItems} />
        </nav>

        <div className="px-4 py-5 border-t border-white/20 dark:border-white/[0.06]">
          <ThemeSwitch />
        </div>
      </aside>
    </>
  )
}

interface SidebarToggleProps {
  onClick: () => void
}

export function SidebarToggle({ onClick }: SidebarToggleProps) {
  return (
    <button onClick={onClick} className="lg:hidden p-2 text-brand-text-muted hover:text-brand-text-primary">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
    </button>
  )
}
