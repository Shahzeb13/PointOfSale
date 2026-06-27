import { productLedger } from '../../data/dashboardMock'

const colors = ['#4DD8E8', '#8C6CF8', '#D6F44A', '#FFB547', '#39C56B', '#F8C8D8', '#E8DFFF', '#CFF7EE']

interface ProductRow {
  id: string
  product: string
  code: string
  orders: number
}

export default function ProductLedger() {
  return (
    <div className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-card p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
      <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Product Ledger</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-brand-text-muted">
              <th className="pb-3 pr-4 font-medium" />
              <th className="pb-3 pr-4 font-medium">Product</th>
              <th className="pb-3 pr-4 font-medium">Code</th>
              <th className="pb-3 text-right font-medium">Orders</th>
            </tr>
          </thead>
          <tbody>
            {productLedger.map((row: ProductRow, idx: number) => (
              <tr
                key={row.id}
                className="border-t border-brand-border transition-colors hover:bg-brand-bg"
                style={{ height: '52px' }}
              >
                <td className="pr-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-white"
                    style={{ backgroundColor: colors[idx % colors.length] }}
                  >
                    {row.product.charAt(0)}
                  </div>
                </td>
                <td className="pr-4 text-sm text-brand-text-primary font-medium">{row.product}</td>
                <td className="pr-4 text-sm text-brand-text-secondary">{row.code}</td>
                <td className="text-sm text-brand-text-primary text-right font-medium">{row.orders.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
