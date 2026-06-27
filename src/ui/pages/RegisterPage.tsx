import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PosBackground from '../components/PosBackground'
import Logo from '../components/Logo'
import PasswordInput from '../components/PasswordInput'

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!fullName.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('All fields are required.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    register(fullName, username, password)
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <PosBackground />
      <div className="relative bg-brand-card backdrop-blur-2xl border border-white/30 dark:border-white/[0.08] rounded-card px-10 py-10 shadow-premium-lg w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <Logo className="w-12 h-12 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-brand-text-primary">Create Account</h1>
          <p className="text-sm text-brand-text-muted mt-1">Set up your store dashboard</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" className="w-full px-4 py-2.5 rounded-input bg-brand-surface/50 border border-brand-border text-sm text-brand-text-primary placeholder:text-brand-text-muted outline-none focus:border-brand-primary transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username" className="w-full px-4 py-2.5 rounded-input bg-brand-surface/50 border border-brand-border text-sm text-brand-text-primary placeholder:text-brand-text-muted outline-none focus:border-brand-primary transition-colors" />
          </div>
          <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" />
          <PasswordInput label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />

          {error && <p className="text-sm text-accent-orange">{error}</p>}

          <button type="submit" className="w-full py-2.5 rounded-button bg-brand-primary text-gray-900 font-semibold text-sm hover:brightness-105 transition-all">
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-brand-text-muted mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-secondary font-medium hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
