import { ProductCard } from './ProductCard'

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Jesus Over Everything T-Shirt',
    price: 25,
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png',
    badge: 'bestseller',
    rating: 5,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Jesus Over Everything Hoodie',
    price: 65,
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg',
    badge: 'new',
    rating: 5,
    reviews: 43,
  },
  {
    id: '3',
    name: 'Rob Hell T-Shirt',
    price: 25,
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/f42cec8e-ddf1-45c8-bd83-8ccb6aab32c3/Rob+hell-+-+Front.png',
    rating: 5,
    reviews: 89,
  },
  {
    id: '4',
    name: 'Anchors Polo',
    price: 35,
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/0c32ad2c-eb1e-460c-88d8-aa704a32e81b/Anchorspolo+Medium.jpeg',
    badge: 'limited',
    rating: 5,
    reviews: 67,
  },
]

export function FeaturedProducts() {
  return (
    <section id="shop" className="py-32 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-khaki/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 animate-slide-up">
          <p className="text-khaki text-xs uppercase tracking-widest mb-4 font-light">
            Collections
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-primary-50 mb-6">
            Featured <span className="text-khaki">Designs</span>
          </h2>
          <p className="text-primary-200 max-w-2xl leading-relaxed font-light">
            Curated pieces that celebrate premium craftsmanship and bold individuality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="inline-block px-12 py-4 border border-khaki text-khaki font-light rounded-none hover:bg-khaki hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
