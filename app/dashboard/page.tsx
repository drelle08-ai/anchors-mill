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
              Manage your design projects and collaborate on mockups with our team.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/dashboard/projects"
              className="bg-gray-900/50 border border-khaki/20 p-6 hover:border-khaki transition-colors cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📁</div>
              <h3 className="text-xl font-serif font-light text-primary-50 mb-2 group-hover:text-khaki transition-colors">
                Projects
              </h3>
              <p className="text-primary-400 text-sm font-light">
                View and manage your design projects
              </p>
            </a>

            <div className="bg-gray-900/50 border border-khaki/20 p-6 opacity-50">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-serif font-light text-primary-50 mb-2">
                Designs
              </h3>
              <p className="text-primary-400 text-sm font-light">
                Phase 3: Upload mockups
              </p>
            </div>

            <div className="bg-gray-900/50 border border-khaki/20 p-6 opacity-50">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-serif font-light text-primary-50 mb-2">
                Feedback
              </h3>
              <p className="text-primary-400 text-sm font-light">
                Phase 4: Comment & collaborate
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-r from-khaki/10 to-transparent border border-khaki/20 p-6 rounded">
            <h3 className="text-lg font-serif font-light text-primary-50 mb-2">Phase 2 Live ✨</h3>
            <p className="text-primary-300 font-light text-sm">
              Project management is now live! Create, edit, and organize your design projects.
              Upcoming: image uploads, feedback system, and color palette collaboration.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
