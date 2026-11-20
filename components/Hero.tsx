export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] bg-charcoal overflow-hidden flex items-end">
      <img
        src="https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-40">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 mb-8">
          Made in Georgia &middot; Bold apparel
        </p>
        <h1 className="text-white max-w-4xl">
          Bold apparel.
          <span className="block font-normal text-cobalt-light">Refuse to blend in.</span>
        </h1>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a href="#collections" className="inline-flex items-center gap-2 border border-white px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:bg-white hover:text-charcoal transition-colors">
            Explore collections <span aria-hidden="true">&#8599;</span>
          </a>
          <a href="#about" className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors">
            Our story
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between text-[10px] uppercase tracking-[0.25em] text-white/70">
          <span>Georgia</span>
          <span className="hidden sm:inline">T-shirts &middot; Hoodies &middot; Sweatshirts &middot; Infants &amp; Babies</span>
        </div>
      </div>
    </section>
  )
}
