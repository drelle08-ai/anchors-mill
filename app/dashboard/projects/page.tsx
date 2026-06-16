'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Project {
  id: number
  name: string
  description: string
  status: string
  createdAt: string
}

export default function ProjectsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
      return
    }

    if (status === 'authenticated') {
      fetchProjects()
    }
  }, [status])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/projects')
      if (!response.ok) throw new Error('Failed to fetch projects')
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError('Failed to load projects')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setError('Project name is required')
      return
    }

    try {
      setSubmitting(true)
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to create project')

      const newProject = await response.json()
      setProjects([newProject, ...projects])
      setFormData({ name: '', description: '' })
      setShowForm(false)
    } catch (err) {
      setError('Failed to create project')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (projectId: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete project')

      setProjects(projects.filter((p) => p.id !== projectId))
    } catch (err) {
      setError('Failed to delete project')
      console.error(err)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-primary-300 font-light">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-khaki/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-light text-primary-50">
              Projects
            </h1>
            <p className="text-primary-400 font-light text-sm mt-1">
              Manage your design projects
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-2 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all active:scale-95"
          >
            {showForm ? 'Cancel' : 'New Project'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 bg-red-900/20 border border-red-500/30 p-4 rounded text-red-200 text-sm font-light">
            {error}
          </div>
        )}

        {/* Create Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-12 bg-gray-900/50 border border-khaki/20 p-8 space-y-4"
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
                placeholder="e.g., Summer Collection Mockups"
                required
              />
            </div>

            <div>
              <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-2">
                Description (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
                placeholder="Describe the purpose of this project..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 disabled:opacity-50 transition-all active:scale-95"
            >
              {submitting ? 'Creating...' : 'Create Project'}
            </button>
          </form>
        )}

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-primary-400 font-light text-lg">
              No projects yet. Create one to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/dashboard/projects/${project.id}`}
              >
                <div className="bg-gray-900/50 border border-khaki/20 p-6 hover:border-khaki transition-all cursor-pointer h-full flex flex-col justify-between group">
                  <div>
                    <h3 className="text-xl font-serif font-light text-primary-50 mb-2 group-hover:text-khaki transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-primary-300 font-light text-sm mb-4 line-clamp-3">
                      {project.description || 'No description'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-khaki/10">
                    <span className="text-xs text-primary-400 font-light">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleDelete(project.id)
                      }}
                      className="text-xs text-red-400 hover:text-red-300 font-light uppercase tracking-widest transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
