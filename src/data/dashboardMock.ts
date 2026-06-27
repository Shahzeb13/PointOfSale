export const kpiData = [
  {
    id: 1,
    label: 'Total Orders',
    value: '75,680',
    delta: '+7.2%',
    deltaUp: true,
    iconBg: 'bg-accent-orange/10',
    iconColor: 'text-accent-orange',
    icon: 'cart',
  },
  {
    id: 2,
    label: 'Total Revenue',
    value: '$268,940',
    delta: '+11.4%',
    deltaUp: true,
    iconBg: 'bg-accent-mint',
    iconColor: 'text-accent-success',
    icon: 'revenue',
  },
  {
    id: 3,
    label: 'Active Users',
    value: '3,421',
    delta: '-2.1%',
    deltaUp: false,
    iconBg: 'bg-accent-lavender',
    iconColor: 'text-accent-cyan',
    icon: 'users',
  },
]

export const weeklyOrders = [
  { day: 'Mon', orders: 420, profit: 2800 },
  { day: 'Tue', orders: 380, profit: 2400 },
  { day: 'Wed', orders: 510, profit: 3600 },
  { day: 'Thu', orders: 490, profit: 3200 },
  { day: 'Fri', orders: 670, profit: 5100 },
  { day: 'Sat', orders: 820, profit: 6800 },
  { day: 'Sun', orders: 750, profit: 5900 },
]

export const donutSegments = [
  { label: 'Electronics', value: 35, color: 'var(--color-primary-400)' },
  { label: 'Clothing', value: 25, color: 'var(--color-secondary-400)' },
  { label: 'Groceries', value: 20, color: 'accent-cyan' },
  { label: 'Accessories', value: 20, color: 'accent-orange' },
]

export const summaryData = [
  { label: 'Avg Order Value', value: '$52.40', subtext: '↑ 4.3% vs last week' },
  { label: 'Conversion Rate', value: '12.6%', subtext: '↑ 1.2% vs last week' },
  { label: 'Customer Retention', value: '78.3%', subtext: '↓ 0.8% vs last month' },
]

export const productLedger = [
  { id: 'P-1001', product: 'Wireless Headphones', code: 'WH-200', orders: 432 },
  { id: 'P-1002', product: 'Organic Cotton Tee', code: 'OCT-12', orders: 389 },
  { id: 'P-1003', product: 'Smart Water Bottle', code: 'SWB-07', orders: 315 },
  { id: 'P-1004', product: 'Premium Coffee Set', code: 'PCS-22', orders: 278 },
  { id: 'P-1005', product: 'Yoga Mat Pro', code: 'YMP-05', orders: 254 },
  { id: 'P-1006', product: 'Bluetooth Speaker', code: 'BS-90', orders: 211 },
  { id: 'P-1007', product: 'Leather Wallet', code: 'LW-44', orders: 187 },
  { id: 'P-1008', product: 'Desk Organizer', code: 'DO-31', orders: 165 },
]

/* Vendors */
export const vendorsData = [
  { name: 'TechDistrib Inc.', code: 'TD-001', category: 'Electronics', balanceDue: 28450, lastPayment: '2026-05-15' },
  { name: 'GlobalTextiles Co.', code: 'GT-042', category: 'Clothing', balanceDue: 12200, lastPayment: '2026-05-28' },
  { name: 'FreshSupply LLC', code: 'FS-113', category: 'Groceries', balanceDue: 8700, lastPayment: '2026-06-01' },
  { name: 'OfficePro Warehouse', code: 'OP-209', category: 'Office Supplies', balanceDue: 5600, lastPayment: '2026-05-10' },
  { name: 'BuildMart Corp.', code: 'BM-077', category: 'Hardware', balanceDue: 19350, lastPayment: '2026-04-22' },
  { name: 'PackRight Ltd.', code: 'PR-031', category: 'Packaging', balanceDue: 4100, lastPayment: '2026-06-05' },
]

/* Customers */
export const customersData = [
  { name: 'Alice Johnson', phone: '(555) 123-4567', totalOrders: 24, lifetimeValue: 8400, status: 'Active' },
  { name: 'Bob Martinez', phone: '(555) 234-5678', totalOrders: 12, lifetimeValue: 3200, status: 'Active' },
  { name: 'Catherine Lee', phone: '(555) 345-6789', totalOrders: 7, lifetimeValue: 1850, status: 'Inactive' },
  { name: 'David Kim', phone: '(555) 456-7890', totalOrders: 31, lifetimeValue: 12700, status: 'Active' },
  { name: 'Elena Gomez', phone: '(555) 567-8901', totalOrders: 5, lifetimeValue: 980, status: 'Inactive' },
  { name: 'Frank Wilson', phone: '(555) 678-9012', totalOrders: 18, lifetimeValue: 6100, status: 'Active' },
  { name: 'Grace Chen', phone: '(555) 789-0123', totalOrders: 42, lifetimeValue: 22100, status: 'Active' },
]

/* Invoices */
export const invoicesData = [
  { id: 'INV-2026-001', customer: 'Alice Johnson', issueDate: '2026-05-01', dueDate: '2026-05-31', total: 4200, status: 'Paid' },
  { id: 'INV-2026-002', customer: 'Bob Martinez', issueDate: '2026-05-10', dueDate: '2026-06-09', total: 1850, status: 'Pending' },
  { id: 'INV-2026-003', customer: 'David Kim', issueDate: '2026-04-15', dueDate: '2026-05-15', total: 5600, status: 'Overdue' },
  { id: 'INV-2026-004', customer: 'Frank Wilson', issueDate: '2026-05-20', dueDate: '2026-06-19', total: 2100, status: 'Pending' },
  { id: 'INV-2026-005', customer: 'Grace Chen', issueDate: '2026-05-05', dueDate: '2026-06-04', total: 7800, status: 'Paid' },
  { id: 'INV-2026-006', customer: 'Alice Johnson', issueDate: '2026-04-28', dueDate: '2026-05-28', total: 3200, status: 'Overdue' },
  { id: 'INV-2026-007', customer: 'Catherine Lee', issueDate: '2026-05-25', dueDate: '2026-06-24', total: 980, status: 'Pending' },
]

/* Expenses */
export const expensesData = [
  { date: '2026-06-01', category: 'Rent', description: 'Monthly office rent', amount: 8500, method: 'Bank Transfer' },
  { date: '2026-06-02', category: 'Utilities', description: 'Electricity & water bill', amount: 1240, method: 'ACH' },
  { date: '2026-06-03', category: 'Inventory', description: 'Q3 stock replenishment', amount: 22300, method: 'Wire Transfer' },
  { date: '2026-06-05', category: 'Marketing', description: 'Social media ad campaign', amount: 4500, method: 'Credit Card' },
  { date: '2026-06-07', category: 'Utilities', description: 'Internet & phone service', amount: 680, method: 'ACH' },
  { date: '2026-06-10', category: 'Inventory', description: 'Seasonal merchandise order', amount: 15100, method: 'Wire Transfer' },
  { date: '2026-06-12', category: 'Marketing', description: 'Email newsletter platform', amount: 350, method: 'Credit Card' },
  { date: '2026-06-15', category: 'Rent', description: 'Warehouse lease payment', amount: 4200, method: 'Bank Transfer' },
]

/* Inventory */
export const inventoryData = [
  { name: 'Wireless Headphones', sku: 'WH-200', category: 'Electronics', stockStatus: 'In Stock', qty: 340, unitCost: 42 },
  { name: 'Organic Cotton Tee', sku: 'OCT-12', category: 'Clothing', stockStatus: 'In Stock', qty: 520, unitCost: 18 },
  { name: 'Smart Water Bottle', sku: 'SWB-07', category: 'Accessories', stockStatus: 'Low Stock', qty: 28, unitCost: 25 },
  { name: 'Premium Coffee Set', sku: 'PCS-22', category: 'Home Goods', stockStatus: 'Low Stock', qty: 15, unitCost: 55 },
  { name: 'Yoga Mat Pro', sku: 'YMP-05', category: 'Fitness', stockStatus: 'In Stock', qty: 190, unitCost: 35 },
  { name: 'Bluetooth Speaker', sku: 'BS-90', category: 'Electronics', stockStatus: 'Out of Stock', qty: 0, unitCost: 60 },
  { name: 'Leather Wallet', sku: 'LW-44', category: 'Accessories', stockStatus: 'In Stock', qty: 115, unitCost: 45 },
  { name: 'Desk Organizer', sku: 'DO-31', category: 'Office', stockStatus: 'Low Stock', qty: 22, unitCost: 20 },
]

/* Financial Summaries */
export const balanceSheetData = [
  { lineItem: 'Cash & Cash Equivalents', year2025: 142000, year2026: 184000 },
  { lineItem: 'Accounts Receivable', year2025: 52000, year2026: 61000 },
  { lineItem: 'Inventory', year2025: 88000, year2026: 95000 },
  { lineItem: 'Property & Equipment', year2025: 210000, year2026: 205000 },
  { lineItem: 'Total Assets', year2025: 492000, year2026: 545000 },
  { lineItem: 'Accounts Payable', year2025: 38000, year2026: 42000 },
  { lineItem: 'Short-Term Debt', year2025: 22000, year2026: 18000 },
  { lineItem: 'Total Liabilities', year2025: 60000, year2026: 60000 },
  { lineItem: "Owner's Equity", year2025: 432000, year2026: 485000 },
]

export const profitLossData = [
  { lineItem: 'Gross Revenue', currentMonth: 184000, previousMonth: 165000 },
  { lineItem: 'Returns & Allowances', currentMonth: -4200, previousMonth: -3800 },
  { lineItem: 'Net Revenue', currentMonth: 179800, previousMonth: 161200 },
  { lineItem: 'COGS', currentMonth: -72300, previousMonth: -65800 },
  { lineItem: 'Gross Profit', currentMonth: 107500, previousMonth: 95400 },
  { lineItem: 'Operating Expenses', currentMonth: -51400, previousMonth: -48900 },
  { lineItem: 'Net Income', currentMonth: 56100, previousMonth: 46500 },
]

export const dayClosingData = [
  { register: 'Reg-01', cashDeclared: 4520, systemTotal: 4480, electronic: 12340, discrepancy: 40 },
  { register: 'Reg-02', cashDeclared: 3180, systemTotal: 3200, electronic: 9870, discrepancy: -20 },
  { register: 'Reg-03', cashDeclared: 5670, systemTotal: 5670, electronic: 15620, discrepancy: 0 },
  { register: 'Reg-04', cashDeclared: 2890, systemTotal: 2910, electronic: 7650, discrepancy: -20 },
]

/* Bank Transactions */
export const bankTransactionsData = [
  { id: 'TXN-001', date: '2026-06-01', description: 'Client payment - Invoice INV-001', account: 'Main Operating', type: 'Credit', amount: 4200, balance: 84200 },
  { id: 'TXN-002', date: '2026-06-02', description: 'Office rent payment', account: 'Main Operating', type: 'Debit', amount: 8500, balance: 75700 },
  { id: 'TXN-003', date: '2026-06-03', description: 'Vendor payment - TechDistrib', account: 'Main Operating', type: 'Debit', amount: 14200, balance: 61500 },
  { id: 'TXN-004', date: '2026-06-05', description: 'Petty cash replenishment', account: 'Petty Cash', type: 'Credit', amount: 500, balance: 500 },
  { id: 'TXN-005', date: '2026-06-07', description: 'Sales deposit - Week 22', account: 'Main Operating', type: 'Credit', amount: 28100, balance: 89600 },
  { id: 'TXN-006', date: '2026-06-08', description: 'Office supplies purchase', account: 'Petty Cash', type: 'Debit', amount: 230, balance: 270 },
  { id: 'TXN-007', date: '2026-06-10', description: 'Utility bill payment', account: 'Main Operating', type: 'Debit', amount: 1920, balance: 87680 },
  { id: 'TXN-008', date: '2026-06-12', description: 'Client payment - Invoice INV-005', account: 'Main Operating', type: 'Credit', amount: 7800, balance: 95480 },
]
