import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  vendorsData as initialVendors,
  customersData as initialCustomers,
  invoicesData as initialInvoices,
  expensesData as initialExpenses,
  inventoryData as initialInventory,
  bankTransactionsData as initialTransactions,
} from '../../data/dashboardMock'

interface Vendor { name: string; code: string; category: string; balanceDue: number; lastPayment: string }
interface Customer { name: string; phone: string; totalOrders: number; lifetimeValue: number; status: string }
interface Invoice { id: string; customer: string; issueDate: string; dueDate: string; total: number; status: string }
interface Expense { date: string; category: string; description: string; amount: number; method: string }
interface InventoryItem { name: string; sku: string; category: string; stockStatus: string; qty: number; unitCost: number }
interface Transaction { id: string; date: string; description: string; account: string; type: string; amount: number; balance: number }

interface DataContextType {
  vendors: Vendor[]
  addVendor: (v: Vendor) => void
  customers: Customer[]
  addCustomer: (c: Customer) => void
  invoices: Invoice[]
  addInvoice: (inv: Invoice) => void
  expenses: Expense[]
  addExpense: (e: Expense) => void
  inventory: InventoryItem[]
  addInventoryItem: (item: InventoryItem) => void
  transactions: Transaction[]
  addTransaction: (t: Transaction) => void
}

const DataContext = createContext<DataContextType | null>(null)

export function DataProvider({ children }: { children: ReactNode }) {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors)
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers)
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices)
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses)
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory)
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)

  const addVendor = (v: Vendor) => setVendors((prev) => [...prev, v])
  const addCustomer = (c: Customer) => setCustomers((prev) => [...prev, c])
  const addInvoice = (inv: Invoice) => setInvoices((prev) => [...prev, inv])
  const addExpense = (e: Expense) => setExpenses((prev) => [...prev, e])
  const addInventoryItem = (item: InventoryItem) => setInventory((prev) => [...prev, item])
  const addTransaction = (t: Transaction) => setTransactions((prev) => [...prev, t])

  return (
    <DataContext.Provider value={{
      vendors, addVendor,
      customers, addCustomer,
      invoices, addInvoice,
      expenses, addExpense,
      inventory, addInventoryItem,
      transactions, addTransaction,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
