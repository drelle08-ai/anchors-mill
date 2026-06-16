'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-primary-300 font-light">Loading...</div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/auth/login')
    return null
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-khaki/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-light text-primary-50">
            Design Portal
          </h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-khaki hover:text-accent-400 font-light text-sm uppercase tracking-widest transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-serif font-light text-primary-50 mb-4">
              Welcome, {session?.user?.name || 'User'}!
            </h2>
            <p className="text-primary-300 font-light">
              Your design collaboration portal is ready. Coming soon: projects,
              image uploads, and feedback system.
            </p>
          </div>

          {/* Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Projects', icon: '📁', status: 'Coming Soon' },
              { title: 'Designs', icon: '🎨', status: 'Coming Soon' },
              { title: 'Feedback', icon: '💬', status: 'Coming Soon' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900/50 border border-khaki/20 p-6 hover:border-khaki transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-serif font-light text-primary-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-400 text-sm font-light">
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
