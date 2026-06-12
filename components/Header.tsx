'use client'

import { useState } from 'react'
import { Logo } from './Logo'
import { Heart, ShoppingBag, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/60 border-b border-khaki/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/shop"
              className="text-primary-200 font-light hover:text-khaki transition-colors"
            >
              Shop
            </a>
            <a
              href="#about"
              className="text-primary-200 font-light hover:text-khaki transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-primary-200 font-light hover:text-khaki transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-khaki/10 rounded-lg transition-colors"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart size={20} className="text-khaki" />
            </button>
            <button
              className="p-2 hover:bg-khaki/10 rounded-lg transition-colors relative"
              aria-label="Shopping bag"
              title="Shopping bag"
            >
              <ShoppingBag size={20} className="text-khaki" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-khaki text-charcoal text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-khaki/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} className="text-khaki" /> : <Menu size={20} className="text-khaki" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <a
              href="/shop"
              className="block py-3 text-primary-200 font-light hover:text-khaki transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#about"
              className="block py-3 text-primary-200 font-light hover:text-khaki transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-3 text-primary-200 font-light hover:text-khaki transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
