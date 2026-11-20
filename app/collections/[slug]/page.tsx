import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CATEGORIES, getCategory } from '@/lib/products'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug)
  return category ? { title: `${category.name} - Anchor's Mill`, description: category.intro } : {}
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug)
  if (!category) notFound()

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="px-6 lg:px-10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <a href="/#collections" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal hover:text-cobalt transition-colors">
            <span aria-hidden="true">&larr;</span> All collections
          </a>
          <p className="mt-12 text-[11px] font-medium uppercase tracking-[0.3em] text-cobalt mb-6">Collection</p>
          <h1>{category.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">{category.intro}</p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <figure key={product.id} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-mist">
                <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <figcaption className="mt-4 font-display text-lg leading-snug">{product.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
