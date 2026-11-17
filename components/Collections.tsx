const COLLECTIONS = [
  { id: 'tshirts', name: 'T-Shirts', blurb: 'Everyday essentials with bold graphics.', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png' },
  { id: 'hoodies', name: 'Hoodies', blurb: 'Cozy layers with the Anchor’s Mill look.', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg' },
  { id: 'sweatshirts', name: 'Sweatshirts', blurb: 'Relaxed fits built for everyday wear.', image: null },
  { id: 'baby', name: 'Baby Clothing', blurb: 'Little ones, big statements.', image: null },
]

export function Collections() {
  return (
    <section id="collections" className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cobalt mb-6">Collections</p>
            <h2>A collection for <span className="font-normal">every day.</span></h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-base leading-relaxed text-charcoal/75">
            Four categories, one point of view. Follow along for new drops and the designs behind them.
          </p>
        </div>

        <ul className="border-t border-charcoal/20">
          {COLLECTIONS.map((item, i) => (
            <li key={item.id} id={item.id} className="border-b border-charcoal/20">
              <a href="#contact" className="group grid grid-cols-12 items-center gap-6 py-8">
                <span className="col-span-1 font-display text-lg text-cobalt">0{i + 1}</span>
                <span className="col-span-11 md:col-span-5 font-display text-4xl md:text-5xl  transition-all">{item.name}</span>
                <span className="hidden md:block md:col-span-4 text-sm text-charcoal/70 leading-relaxed">{item.blurb}</span>
                <span className="col-span-12 md:col-span-2 flex md:justify-end items-center gap-4">
                  <span className="w-20 h-20 bg-mist overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt="" loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[9px] uppercase tracking-[0.15em] text-charcoal/50 text-center px-1">Photo soon</span>
                    )}
                  </span>
                  <span aria-hidden="true" className="text-xl">&#8599;</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
