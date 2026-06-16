'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid username or password')
      setLoading(false)
    } else if (result?.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-light text-primary-50 mb-2">
            Design Portal
          </h1>
          <p className="text-primary-300 font-light">
            Sign in to view your project designs
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/50 border border-khaki/20 p-8 space-y-6"
        >
          {error && (
            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded text-red-200 text-sm font-light">
              {error}
            </div>
          )}

          {/* Username Field */}
          <div>
            <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
              placeholder="your username"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
              placeholder="your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 disabled:opacity-50 transition-all duration-300 active:scale-95"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Info */}
        <p className="text-center text-primary-400 text-sm font-light mt-8">
          Contact Anchor's Mill for login credentials
        </p>
      </div>
    </div>
  )
}
