const COLLECTIONS = [
  {
    id: 'tshirts',
    name: 'T-Shirts',
    blurb: 'Everyday essentials with bold graphics.',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png',
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    blurb: 'Cozy layers with the Anchor’s Mill look.',
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg',
  },
  {
    id: 'sweatshirts',
    name: 'Sweatshirts',
    blurb: 'Relaxed fits built for everyday wear.',
    image: null,
  },
  {
    id: 'baby',
    name: 'Baby Clothing',
    blurb: 'Little ones, big statements.',
    image: null,
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-24 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cobalt mb-6">Collections</p>
            <h2>A collection for <span className="font-normal text-cobalt">every day.</span></h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-base leading-relaxed text-charcoal/75">
            Four categories, one point of view. Follow along for new drops and the designs behind them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href="#contact"
              className="group relative block aspect-[3/4] overflow-hidden bg-charcoal"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                  Photo soon
                </span>
              )}

              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" aria-hidden="true" />

              <span className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4 text-white">
                <span>
                  <span className="block font-display text-3xl leading-none">{item.name}</span>
                  <span className="mt-3 block text-sm text-white/80 leading-relaxed">{item.blurb}</span>
                </span>
                <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">&#8599;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
