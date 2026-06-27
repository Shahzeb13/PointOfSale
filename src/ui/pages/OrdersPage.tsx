export default function OrdersPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-accent-cyan/20 flex items-center justify-center mb-4">
        <svg className="text-accent-cyan" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-brand-text-primary mb-2">Orders</h2>
      <p className="text-brand-text-muted max-w-md">Track and manage all customer orders from this section.</p>
    </div>
  )
}
