'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const errorMessages: Record<string, string> = {
    CredentialsSignin: 'Invalid username or password',
    default: 'An authentication error occurred',
  }

  const message = error ? errorMessages[error] || errorMessages.default : errorMessages.default

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-light text-primary-50 mb-4">
            Authentication Error
          </h1>
          <p className="text-primary-300 font-light">
            {message}
          </p>
        </div>

        <div className="bg-gray-900/50 border border-khaki/20 p-8">
          <Link
            href="/auth/login"
            className="block w-full px-6 py-3 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all text-center active:scale-95"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  )
}
