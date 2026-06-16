'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

interface Project {
  id: number
  name: string
  description: string
  status: string
  createdAt: string
  customerId: number
}

export default function ProjectDetailPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const projectId = params.id as string

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
      return
    }

    if (status === 'authenticated') {
      fetchProject()
    }
  }, [status, projectId])

  const fetchProject = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/projects/${projectId}`)
      if (!response.ok) throw new Error('Failed to fetch project')
      const data = await response.json()
      setProject(data)
      setFormData({ name: data.name, description: data.description })
    } catch (err) {
      setError('Failed to load project')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setError('Project name is required')
      return
    }

    try {
      setSubmitting(true)
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to update project')

      const updated = await response.json()
      setProject(updated)
      setIsEditing(false)
    } catch (err) {
      setError('Failed to update project')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-primary-300 font-light">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-primary-400 font-light">Project not found</p>
          <Link
            href="/dashboard/projects"
            className="text-khaki hover:text-accent-400 font-light mt-4 inline-block"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-khaki/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/dashboard/projects"
            className="text-khaki hover:text-accent-400 font-light text-sm uppercase tracking-widest mb-4 inline-block transition-colors"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-serif font-light text-primary-50">
            {project.name}
          </h1>
          <p className="text-primary-400 font-light text-sm mt-2">
            Created {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 bg-red-900/20 border border-red-500/30 p-4 rounded text-red-200 text-sm font-light">
            {error}
          </div>
        )}

        {/* Project Info */}
        {!isEditing ? (
          <div className="bg-gray-900/50 border border-khaki/20 p-8 mb-8">
            <div className="mb-6">
              <h2 className="text-sm uppercase tracking-widest text-primary-400 font-light mb-2">
                Description
              </h2>
              <p className="text-primary-200 font-light text-lg leading-relaxed">
                {project.description || 'No description provided'}
              </p>
            </div>

            <div className="mb-6 pt-6 border-t border-khaki/20">
              <h2 className="text-sm uppercase tracking-widest text-primary-400 font-light mb-2">
                Status
              </h2>
              <p className="text-primary-200 font-light">
                <span className="inline-block px-3 py-1 bg-khaki/10 border border-khaki/30 text-khaki text-sm">
                  {project.status}
                </span>
              </p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all active:scale-95"
            >
              Edit Project
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="bg-gray-900/50 border border-khaki/20 p-8 mb-8 space-y-4"
          >
            <div>
              <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
                required
              />
            </div>

            <div>
              <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
                rows={5}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-6 py-3 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 disabled:opacity-50 transition-all active:scale-95"
              >
                {submitting ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex-1 px-6 py-3 border border-khaki/20 text-primary-200 font-light uppercase tracking-widest hover:border-khaki transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Images Section - Coming Soon */}
        <div className="bg-gray-900/50 border border-khaki/20 p-8">
          <h2 className="text-xl font-serif font-light text-primary-50 mb-4">
            Design Images
          </h2>
          <p className="text-primary-400 font-light">
            Coming in Phase 3: Upload and manage design mockups
          </p>
        </div>
      </main>
    </div>
  )
}
