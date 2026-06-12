'use client'

import { useState } from 'react'
import { Heart, ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  badge?: string
  rating?: number
  reviews?: number
}

const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2']

export function ProductCard({
  id,
  name,
  price,
  image,
  badge,
  rating = 5,
  reviews = 0,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const rotation = rotations[Math.floor(Math.random() * rotations.length)]

  return (
    <div className="group animate-fade-in">
      <div className={`relative bg-charcoal rounded-none overflow-hidden border border-khaki/20 hover:border-khaki transition-all duration-300 transform ${rotation} hover:rotate-0 shadow-xl`}>
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-khaki text-charcoal px-3 py-1 text-xs font-bold uppercase tracking-wider animate-scale-in">
            {badge}
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-96 bg-gray-900 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <button
              className="p-3 bg-charcoal text-khaki rounded-full hover:bg-khaki hover:text-charcoal transition-all duration-200 transform scale-75 group-hover:scale-100 shadow-lg border border-khaki"
              onClick={() => setIsWishlisted(!isWishlisted)}
              title="Add to wishlist"
            >
              <Heart
                size={24}
                className={isWishlisted ? 'fill-current' : ''}
              />
            </button>
            <button
              className="p-3 bg-khaki text-charcoal rounded-full hover:bg-khaki hover:text-charcoal transition-all duration-200 transform scale-75 group-hover:scale-100 shadow-lg"
              title="Add to cart"
            >
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 bg-charcoal border-t border-khaki/20">
          <h3 className="font-serif text-lg font-light text-primary-50 mb-2 line-clamp-2">
            {name}
          </h3>

          {/* Rating */}
          {reviews > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(rating)
                        ? 'text-khaki'
                        : 'text-gray-700'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-primary-300">({reviews})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-light text-khaki">
              ${price}
            </span>
            <span className="text-xs text-primary-400 font-light">USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}
