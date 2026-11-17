export function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] overflow-hidden bg-charcoal">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/634cc85d-da77-4fd0-b76a-fec6ea3b8d38/So+there%27s+this+girl+Medium.jpeg"
              alt="Anchor's Mill craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 space-y-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cobalt-light">Our story</p>
          <blockquote className="font-display text-4xl md:text-5xl leading-tight">
            Designed with purpose. <span className="text-cobalt-light">Made to be worn.</span>
          </blockquote>
          <div className="space-y-5 text-base leading-relaxed text-white/80">
            <p>Anchor&rsquo;s Mill is built on quality, authenticity, and fearless self-expression. Every design starts with a purpose.</p>
            <p>We believe clothing tells a story, and each piece should celebrate the person who wears it.</p>
            <p>Based in Georgia, we blend heritage craftsmanship with contemporary design for the modern iconoclast.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-white hover:text-charcoal transition-colors">
            Get in touch <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
