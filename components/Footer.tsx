import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 lg:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6 space-y-6">
            <Logo tone="light" />
            <p className="font-display text-3xl leading-snug max-w-md">
              Bold apparel for the <span className="text-cobalt-light">modern individual.</span>
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-8 space-y-4">
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-cobalt-light">Explore</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#collections" className="hover:text-white">Collections</a></li>
              <li><a href="#about" className="hover:text-white">Our story</a></li>
              <li><a href="#contact" className="hover:text-white">Connect</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Anchor&rsquo;s Mill. Made in Georgia.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
