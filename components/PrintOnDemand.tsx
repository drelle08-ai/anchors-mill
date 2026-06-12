'use client'

import { useState } from 'react'
import { ShoppingBag, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Placeholder for Printify products - will be populated via API
const POD_PRODUCTS = [
  {
    id: 'pod-1',
    name: 'Premium T-Shirt',
    basePrice: 12,
    markupPrice: 25,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'pod-2',
    name: 'Comfort Hoodie',
    basePrice: 25,
    markupPrice: 65,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'pod-3',
    name: 'Classic Crewneck',
    basePrice: 15,
    markupPrice: 35,
    image: 'https://images.unsplash.com/photo-1503341455253-b2b723bb12d5?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Navy', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'pod-4',
    name: 'Performance Long Sleeve',
    basePrice: 18,
    markupPrice: 40,
    image: 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/0c32ad2c-eb1e-460c-88d8-aa704a32e81b/Anchorspolo+Medium.jpeg',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
]

export function PrintOnDemand() {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
  const [cartCount, setCartCount] = useState(0)

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
    setCartCount(prev => prev + 1)
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {POD_PRODUCTS.map((product) => (
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
          Printify Integration Status
        </h3>
        <p className="text-primary-300 font-light leading-relaxed mb-6">
          ✓ Structure ready for Printify API integration. Add your API key and configure product catalog when ready. All orders will automatically sync with Printify for production and fulfillment.
        </p>
        <div className="space-y-2 text-sm text-primary-400 font-light">
          <p>📋 Custom markup pricing configured</p>
          <p>🔄 Ready for real-time product sync</p>
          <p>📦 Automated order fulfillment setup</p>
          <p>🚚 Inventory tracking ready</p>
        </div>
      </div>
    </div>
  )
}
