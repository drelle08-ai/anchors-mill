export function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-khaki/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-khaki text-xs uppercase tracking-widest font-light">
                Our Story
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-primary-50">
                Crafted with <span className="text-khaki">Intent</span>
              </h2>
            </div>

            <div className="space-y-4 text-primary-200 leading-relaxed font-light">
              <p>
                Anchor's Mill represents a commitment to quality, authenticity, and fearless self-expression. Every piece is designed with purpose and crafted to last.
              </p>
              <p>
                We believe clothing tells a story. Whether custom-designed or from our signature collection, each garment celebrates the individual who wears it.
              </p>
              <p>
                Based in Georgia, we blend heritage craftsmanship with contemporary design, creating pieces that resonate with the modern iconoclast.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-khaki/10">
              <div>
                <p className="text-3xl font-serif font-light text-khaki">5k+</p>
                <p className="text-xs text-primary-300 font-light mt-2">Community Members</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-khaki">100%</p>
                <p className="text-xs text-primary-300 font-light mt-2">Premium Materials</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-khaki">10+</p>
                <p className="text-xs text-primary-300 font-light mt-2">Years Excellence</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative h-96 md:h-full min-h-[500px] bg-gray-900 rounded-none overflow-hidden border-2 border-khaki/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/634cc85d-da77-4fd0-b76a-fec6ea3b8d38/So+there%27s+this+girl+Medium.jpeg"
                alt="Anchor's Mill craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
