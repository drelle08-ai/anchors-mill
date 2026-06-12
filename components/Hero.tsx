export function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden py-20 flex items-center">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-gray-900"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Typography */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-khaki text-sm uppercase tracking-widest font-light">
                Anchor's Mill
              </p>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light text-primary-50 leading-none">
                Bold
              </h1>
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light text-khaki leading-none">
                Minimal
              </h2>
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light text-primary-50 leading-none">
                Luxury
              </h3>
            </div>

            <p className="text-primary-200 max-w-md text-lg font-light leading-relaxed">
              Premium apparel crafted for those who refuse to blend in.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-khaki text-charcoal font-light uppercase tracking-widest hover:bg-accent-400 transition-all duration-300">
                Shop Now
              </button>
              <button className="px-8 py-4 border border-khaki text-khaki font-light uppercase tracking-widest hover:bg-khaki hover:text-charcoal transition-all duration-300">
                Explore
              </button>
            </div>
          </div>

          {/* Right: Single Featured Image */}
          <div className="relative h-96 lg:h-full lg:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-none overflow-hidden border-2 border-khaki/20 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png"
                alt="Jesus Over Everything T-Shirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-khaki to-transparent"></div>
      </div>
    </section>
  )
}
