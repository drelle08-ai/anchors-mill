'use client'

import { useState, useEffect } from 'react'
import { ShoppingBag, Heart, ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'

interface GelatoProduct {
  id: string
  title: string
  description?: string
  image?: string
  variants?: Array<{
    id: string
    title?: string
    colors?: string[]
    sizes?: string[]
    pricing?: {
      costOfGoods: number
    }
  }>
}

interface ProductCard {
  id: string
  name: string
  basePrice: number
  markupPrice: number
  image: string
  colors: string[]
  sizes: string[]
}

const MARKUP_MULTIPLIER = 2.5 // 150% markup on base price

export function PrintOnDemand() {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
  const [products, setProducts] = useState<ProductCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGelatoProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/gelato-products')

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setProducts(data.products || [])
      } catch (err) {
        console.error('Error fetching Gelato products:', err)
        setError(err instanceof Error ? err.message : 'Failed to load products')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchGelatoProducts()
  }, [])

  const handleAddToCart = (productId: string) => {
    setSelectedProducts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-16">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center gap-2 text-khaki hover:text-accent-400 transition-colors font-light text-sm uppercase tracking-widest mb-8">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* Info Section */}
      <div>
        <h2 className="text-4xl font-serif font-light text-primary-50 mb-4">
          Print-on-Demand <span className="text-khaki">Apparel</span>
        </h2>
        <p className="text-primary-300 max-w-2xl font-light leading-relaxed">
          Premium quality apparel printed with your custom designs. We handle production and shipping — you just design and sell. Fast turnaround, competitive pricing, and excellent quality.
        </p>
      </div>

      {/* Products Grid */}
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-serif font-light text-primary-50">
            Available Products
          </h3>
          <p className="text-khaki font-light">
            {selectedProducts.size} selected
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader className="w-8 h-8 text-khaki animate-spin" />
            <p className="text-primary-300 font-light">Loading Gelato products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-none p-6 mb-8">
            <p className="text-red-200 font-light">⚠️ {error}</p>
            <p className="text-primary-300 text-sm font-light mt-2">Please check your Gelato API configuration.</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-primary-300 font-light">No products available at the moment.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative h-96 bg-gray-900 rounded-none overflow-hidden border border-khaki/20 hover:border-khaki transition-all duration-300 shadow-lg transform hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button
                    className="p-3 bg-charcoal text-khaki rounded-full hover:bg-khaki hover:text-charcoal transition-all duration-200 transform scale-75 group-hover:scale-100 shadow-lg border border-khaki"
                    title="Add to wishlist"
                  >
                    <Heart size={24} />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="p-3 bg-khaki text-charcoal rounded-full hover:bg-accent-400 transition-all duration-200 transform scale-75 group-hover:scale-100 shadow-lg"
                    title="Add to cart"
                  >
                    <ShoppingBag size={24} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-6 space-y-4">
                <h4 className="text-primary-50 font-serif font-light text-lg">
                  {product.name}
                </h4>

                <div className="space-y-2">
                  <p className="text-primary-400 text-sm font-light">
                    Colors: {product.colors.join(', ')}
                  </p>
                  <p className="text-primary-400 text-sm font-light">
                    Sizes: XS - XXL
                  </p>
                </div>

                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-2xl font-serif font-light text-khaki">
                    ${product.markupPrice}
                  </span>
                  <span className="text-xs text-primary-400 line-through">
                    ${product.basePrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Notes */}
      <div className="border-t border-khaki/10 pt-16 bg-gray-900/30 p-8 rounded-none border border-khaki/20">
        <h3 className="text-2xl font-serif font-light text-primary-50 mb-4">
          Gelato Integration Status
        </h3>
        <p className="text-primary-300 font-light leading-relaxed mb-6">
          ✓ Live integration with Gelato API. Products are fetched in real-time with automatic {Math.round((MARKUP_MULTIPLIER - 1) * 100)}% markup pricing. All orders sync automatically with Gelato for production and fulfillment.
        </p>
        <div className="space-y-2 text-sm text-primary-400 font-light">
          <p>✅ Real-time product catalog from Gelato</p>
          <p>💰 Automatic {Math.round((MARKUP_MULTIPLIER - 1) * 100)}% markup applied to base pricing</p>
          <p>📦 Automated order fulfillment via Gelato API</p>
          <p>🚚 Inventory managed by Gelato</p>
        </div>
      </div>
    </div>
  )
}
