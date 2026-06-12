import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-khaki/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-khaki">
              <Logo />
            </div>
            <p className="text-primary-300 text-sm leading-relaxed font-light">
              Premium apparel for the modern individual. Crafted in Georgia, celebrated worldwide.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-serif font-light text-primary-50">Shop</h3>
            <ul className="space-y-2 text-sm text-primary-300 font-light">
              <li><a href="/shop" className="hover:text-khaki transition-colors">All Products</a></li>
              <li><a href="/shop" className="hover:text-khaki transition-colors">Custom DTF</a></li>
              <li><a href="/shop" className="hover:text-khaki transition-colors">Print-on-Demand</a></li>
              <li><a href="/shop" className="hover:text-khaki transition-colors">Browse Designs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-serif font-light text-primary-50">Company</h3>
            <ul className="space-y-2 text-sm text-primary-300 font-light">
              <li><a href="#about" className="hover:text-khaki transition-colors">About</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Journal</a></li>
              <li><a href="#contact" className="hover:text-khaki transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-serif font-light text-primary-50">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-300 font-light">
              <li><a href="#" className="hover:text-khaki transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-khaki transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-khaki/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-400 font-light">
            <p>&copy; 2024 Anchor's Mill. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-khaki transition-colors">Instagram</a>
              <a href="#" className="hover:text-khaki transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
