import { useRouter } from '@tanstack/react-router'
import { Loader2, Lock, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { authClient } from '../../lib/auth-client'
import { AuthLayout } from './AuthLayout'

export const SignupForm = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await authClient.register({
        name: name || undefined,
        email,
        password,
      })
      router.navigate({ to: '/login' })
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Create account"
      subtitle="Start your journey with ConvoBoost today"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500 ml-1">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-950 border-none rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500 ml-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-950 border-none rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500 ml-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-950 border-none rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Create account'
          )}
        </button>
      </form>
    </AuthLayout>
  )
}