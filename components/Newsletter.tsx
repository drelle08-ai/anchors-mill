'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-khaki/10">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
        {/* Content */}
        <div className="space-y-4">
          <p className="text-khaki text-xs uppercase tracking-widest font-light">Newsletter</p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-primary-50">
            Stay <span className="text-khaki">Connected</span>
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto font-light">
            Get early access to new collections, exclusive designs, and insider updates. No spam, just curated content.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-charcoal text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 whitespace-nowrap active:scale-95"
          >
            {subscribed ? '✓ Joined' : 'Subscribe'}
          </button>
        </form>

        {/* Trust note */}
        <p className="text-xs text-primary-400 font-light">
          ✓ We never share your information. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
