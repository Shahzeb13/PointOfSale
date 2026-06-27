import { createContext, useContext, useState, type ReactNode } from 'react'

interface User {
  username: string
  password: string
  fullName: string
}

interface AuthContextType {
  currentUser: User | null
  users: User[]
  login: (username: string, password: string) => boolean
  register: (fullName: string, username: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const defaultUser: User = { username: 'admin', password: 'admin', fullName: 'Shahzeb (Administrator)' }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([defaultUser])
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const login = (username: string, password: string) => {
    const match = users.find((u) => u.username === username && u.password === password)
    if (match) {
      setCurrentUser(match)
      return true
    }
    return false
  }

  const register = (fullName: string, username: string, password: string) => {
    setUsers((prev) => [...prev, { username, password, fullName }])
  }

  const logout = () => setCurrentUser(null)

  return (
    <AuthContext.Provider value={{ currentUser, users, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
