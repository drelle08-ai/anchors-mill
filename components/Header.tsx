'use client'

import { useState } from 'react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '#collections', label: 'Collections' },
  { href: '#about', label: 'Our story' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <a href="/" aria-label="Anchor's Mill home" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal hover:text-cobalt transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 border border-charcoal px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-charcoal hover:text-white transition-colors">
              Connect <span aria-hidden="true">&#8599;</span>
            </a>
          </div>

          <button
            className="md:hidden text-[11px] font-medium uppercase tracking-[0.22em] border border-charcoal px-4 py-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? 'Close' : 'Menu +'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-charcoal/15">
            {[...NAV_LINKS, { href: '#contact', label: 'Connect' }].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-4 text-[11px] font-medium uppercase tracking-[0.22em] border-b border-charcoal/10">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
