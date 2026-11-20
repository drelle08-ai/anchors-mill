const DESIGNS = [
  { id: 'jesus-tee', name: 'Jesus Over Everything T-Shirt', category: 'T-Shirts', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png' },
  { id: 'jesus-hoodie', name: 'Jesus Over Everything Hoodie', category: 'Hoodies', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg' },
  { id: 'rob-hell', name: 'Rob Hell T-Shirt', category: 'T-Shirts', image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/f42cec8e-ddf1-45c8-bd83-8ccb6aab32c3/Rob+hell-+-+Front.png' },
  { id: 'blah-tee', name: 'Blah! Blah! Blah! T-Shirt', category: 'T-Shirts', image: '/products/tshirt-blah.webp' },
  { id: 'faith-tee', name: 'Faith, Hope, Love T-Shirt', category: 'T-Shirts', image: '/products/tshirt-faith-hope-love.webp' },
  { id: 'siblings-tee', name: 'Big Brother & Little Sister Tees', category: 'T-Shirts', image: '/products/tshirt-big-little-siblings.webp' },
  { id: 'pjs-sweatshirt', name: 'PJs, Cocoa & Candy Canes Sweatshirt', category: 'Sweatshirts', image: '/products/sweatshirt-pjs-cocoa.webp' },
  { id: 'emmett-onesie', name: 'Personalized Baby Bodysuit', category: 'Babies’ Clothing', image: '/products/babies-onesie-emmett.webp' },
]

export function DesignGallery() {
  return (
    <section id="designs" className="py-28 px-6 lg:px-10 bg-mist">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cobalt mb-6">Selected work</p>
          <h2>A closer look. <span className="font-normal">Each with a voice of its own.</span></h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNS.map((design) => (
            <figure key={design.id} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-white">
                <img src={design.image} alt={design.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <figcaption className="mt-4 space-y-1">
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-cobalt">{design.category}</span>
                <span className="block font-display text-lg leading-snug">{design.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
