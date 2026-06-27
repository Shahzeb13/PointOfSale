import { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Titlebar from './components/Titlebar'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import ProductsView from './pages/ProductsView'
import OrdersPage from './pages/OrdersPage'
import VendorDetails from './components/views/VendorDetails'
import CustomerDetails from './components/views/CustomerDetails'
import InvoiceBills from './components/views/InvoiceBills'
import ExpensesDetails from './components/views/ExpensesDetails'
import InventoryReport from './components/views/InventoryReport'
import BalanceSheet from './components/views/BalanceSheet'
import ProfitLossReport from './components/views/ProfitLossReport'
import DayClosingReport from './components/views/DayClosingReport'
import BankAccountTransaction from './components/views/BankAccountTransaction'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Titlebar />
        <Header onMenuToggle={() => setSidebarOpen(true)} />

        <main className="relative z-0 flex-1 overflow-y-auto px-5 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/vendor-details" element={<VendorDetails />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/invoices" element={<InvoiceBills />} />
          <Route path="/expenses" element={<ExpensesDetails />} />
          <Route path="/inventory" element={<InventoryReport />} />
          <Route path="/balance-sheet" element={<BalanceSheet />} />
          <Route path="/profit-loss" element={<ProfitLossReport />} />
          <Route path="/day-closing" element={<DayClosingReport />} />
          <Route path="/bank-transactions" element={<BankAccountTransaction />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
