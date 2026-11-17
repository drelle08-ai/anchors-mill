const DESIGNS = [
  { id: '1', name: 'Jesus Over Everything T-Shirt', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png' },
  { id: '2', name: 'Jesus Over Everything Hoodie', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg' },
  { id: '3', name: 'Rob Hell T-Shirt', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/f42cec8e-ddf1-45c8-bd83-8ccb6aab32c3/Rob+hell-+-+Front.png' },
  { id: '4', name: 'Anchors Polo', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/0c32ad2c-eb1e-460c-88d8-aa704a32e81b/Anchorspolo+Medium.jpeg' },
]

export function DesignGallery() {
  return (
    <section id="designs" className="py-28 px-6 lg:px-10 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-khaki mb-6">Selected work</p>
          <h2>A closer look. <span className="italic font-normal">Each with a voice of its own.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNS.map((design, i) => (
            <figure key={design.id} className={`group ${i % 2 === 1 ? 'lg:mt-16' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img src={design.image} alt={design.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <figcaption className="mt-5 flex justify-between items-baseline gap-4">
                <span className="font-serif text-xl leading-snug">{design.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-ink/50 whitespace-nowrap">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
