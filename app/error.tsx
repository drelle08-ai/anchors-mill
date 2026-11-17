'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-display font-light text-primary-50 mb-4">
          Something went wrong
        </h1>
        <p className="text-primary-300 font-light mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-cobalt text-white font-light uppercase tracking-widest hover:bg-cobalt-dark transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
