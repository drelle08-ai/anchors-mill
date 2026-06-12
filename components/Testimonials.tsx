const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    text: 'The quality is exceptional. Each piece has become a staple in my wardrobe. This is luxury done right.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Designer',
    text: 'Custom design brought my vision to life perfectly. Seamless process, impeccable execution.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Entrepreneur',
    text: 'Premium quality and timeless design. My team ordered for our brand event and everyone asked where we got them.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-khaki/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <p className="text-khaki text-xs uppercase tracking-widest mb-4 font-light">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-primary-50 mb-6">
            Loved by <span className="text-khaki">Creators</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/50 rounded-none border border-khaki/20 hover:border-khaki transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-khaki text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary-100 leading-relaxed mb-6 font-light italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-primary-50 font-light">
                  {testimonial.name}
                </p>
                <p className="text-xs text-primary-400 font-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
