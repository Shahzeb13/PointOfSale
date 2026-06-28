import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PosBackground from '../components/PosBackground'
import Logo from '../components/Logo'
import PasswordInput from '../components/PasswordInput'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault(); setError('')
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.')
      return
    }
    const ok = login(email, password)
    if (ok) navigate('/dashboard', { replace: true })
    else setError('User not found or credentials do not match.')
  }

  const handleGoogleLogin = () => {
    login('admin', 'admin')
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <PosBackground />
      <div className="relative bg-brand-card backdrop-blur-2xl border border-white/30 dark:border-white/[0.08] rounded-card px-10 py-10 shadow-premium-lg w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <Logo className="w-12 h-12 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-brand-text-primary">Welcome Back</h1>
          <p className="text-sm text-brand-text-muted mt-1">Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2.5 rounded-input bg-brand-surface/50 border border-brand-border text-sm text-brand-text-primary placeholder:text-brand-text-muted outline-none focus:border-brand-primary transition-colors" />
          </div>
          <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />

          {error && <p className="text-sm text-accent-orange">{error}</p>}

          <button type="submit" className="w-full py-2.5 rounded-button bg-brand-primary text-gray-900 font-semibold text-sm hover:brightness-105 transition-all">
            Sign In
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-brand-border" /></div>
          <div className="relative flex justify-center"><span className="px-3 text-xs text-brand-text-muted bg-brand-card">or</span></div>
        </div>

        <button onClick={handleGoogleLogin} className="w-full py-2.5 rounded-button border border-brand-border text-brand-text-primary font-medium text-sm flex items-center justify-center gap-2.5 hover:bg-brand-surface/50 transition-all">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
          </svg>
          Sign in with Google
        </button>

        <p className="text-center text-xs text-brand-text-muted mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-brand-secondary font-medium hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}
