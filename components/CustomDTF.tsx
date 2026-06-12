'use client'

import { useState } from 'react'

const CUSTOM_PORTFOLIO = [
  {
    id: '1',
    name: 'Jesus Over Everything T-Shirt',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png',
  },
  {
    id: '2',
    name: 'Jesus Over Everything Hoodie',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg',
  },
  {
    id: '3',
    name: 'Rob Hell T-Shirt',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/f42cec8e-ddf1-45c8-bd83-8ccb6aab32c3/Rob+hell-+-+Front.png',
  },
  {
    id: '4',
    name: 'Anchors Polo',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/0c32ad2c-eb1e-460c-88d8-aa704a32e81b/Anchorspolo+Medium.jpeg',
  },
]

export function CustomDTF() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    quantity: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', description: '', quantity: '', budget: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="space-y-16">
      {/* Portfolio Section */}
      <div>
        <h2 className="text-4xl font-serif font-light text-primary-50 mb-12">
          Our <span className="text-khaki">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {CUSTOM_PORTFOLIO.map((item) => (
            <div key={item.id} className="group">
              <div className="relative h-80 bg-gray-900 rounded-none overflow-hidden border border-khaki/20 hover:border-khaki transition-all duration-300 shadow-lg transform hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-primary-200 font-light mt-4">{item.name}</p>
            </div>
          ))}
        </div>

        <p className="text-primary-300 max-w-2xl font-light leading-relaxed">
          Browse our custom designs and get inspired. See something you like? Use our custom request form below to commission your own piece or order a variation of an existing design.
        </p>
      </div>

      {/* Custom Request Form */}
      <div className="border-t border-khaki/10 pt-16">
        <h2 className="text-4xl font-serif font-light text-primary-50 mb-4">
          Request <span className="text-khaki">Custom Design</span>
        </h2>
        <p className="text-primary-300 max-w-2xl font-light mb-12">
          Tell us your vision. Whether you want a custom design from scratch or a variation of an existing design, we'll work with you to create something perfect.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          {/* Name */}
          <div>
            <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
              placeholder="your@email.com"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
              Design Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light resize-none"
              placeholder="Describe your design concept, colors, style, message, or attach inspiration links..."
            />
          </div>

          {/* Quantity & Budget */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
                placeholder="How many?"
                min="1"
              />
            </div>

            <div>
              <label className="block text-primary-200 font-light text-sm uppercase tracking-widest mb-3">
                Budget Range
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-900/50 text-primary-100 placeholder-primary-400 border border-khaki/20 focus:border-khaki focus:outline-none transition-all font-light"
                placeholder="e.g., $500 - $1000"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full px-8 py-4 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 active:scale-95"
            >
              {submitted ? '✓ Request Sent!' : 'Send Custom Request'}
            </button>
            {submitted && (
              <p className="text-khaki text-sm text-center mt-3 font-light">
                We'll review your request and get back to you within 24 hours.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
