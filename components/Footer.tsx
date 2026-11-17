import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink text-cream px-6 lg:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6 space-y-6">
            <Logo tone="light" />
            <p className="font-serif text-3xl leading-snug max-w-md">
              Bold apparel for the <span className="italic text-khaki">modern individual.</span>
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-8 space-y-4">
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-khaki">Explore</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><a href="#collections" className="hover:text-cream">Collections</a></li>
              <li><a href="#designs" className="hover:text-cream">Selected work</a></li>
              <li><a href="#about" className="hover:text-cream">Our story</a></li>
              <li><a href="#contact" className="hover:text-cream">Connect</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/15 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Anchor&rsquo;s Mill. Made in Georgia.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">Instagram</a>
            <a href="#" className="hover:text-cream">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
