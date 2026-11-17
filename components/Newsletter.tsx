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
    <section id="contact" className="py-28 px-6 lg:px-10 bg-cream border-t border-ink/15">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-khaki">Newsletter</p>
        <h2>Your next chapter <span className="italic font-normal">starts here.</span></h2>
        <p className="text-base text-ink/75 max-w-xl mx-auto leading-relaxed">
          Get new design announcements and brand news. No spam, just curated content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch max-w-xl mx-auto border-b border-ink">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
            className="flex-1 bg-transparent px-1 py-4 text-base placeholder-ink/40 focus:outline-none"
          />
          <button type="submit" className="py-4 px-1 sm:pl-6 text-[11px] font-medium uppercase tracking-[0.22em] hover:text-khaki transition-colors">
            {subscribed ? 'Joined ✓' : 'Subscribe ↗'}
          </button>
        </form>

        <p className="text-xs text-ink/55">We never share your information. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
