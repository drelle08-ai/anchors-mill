import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PriceCalculator } from '@/components/PriceCalculator'

export const metadata = {
  title: "Pricing - Anchor's Mill",
  description: 'Custom shirts for your event, priced per piece. Front prints from $22, with back and sleeve add-ons.',
}

const ROSE = '#BE185D'
const INK = '#161214'

const CARDS = [
  {
    title: 'T-shirts',
    label: 'Custom design',
    price: 'from $22',
    unit: 'per shirt',
    lines: [
      { label: 'Quarter front (chest)', value: '$22' },
      { label: 'Full front', value: '$25' },
    ],
    highlight: true,
  },
  { title: 'Long sleeves', label: null, price: '$28', unit: 'per shirt', lines: [] as { label: string; value: string }[], highlight: false },
  { title: 'Hoodies', label: null, price: '$35', unit: 'per hoodie', lines: [] as { label: string; value: string }[], highlight: false },
]

const ADDONS = [
  { label: 'Back print', value: '+$5' },
  { label: 'Sleeve print', value: '+$2' },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white" style={{ color: INK }}>
      <Header />

      {/* 1. Heading */}
      <section className="px-6 lg:px-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: ROSE }}>
            Pricing &middot; Crafted with Intent
          </p>
          <h1 className="mt-6 max-w-4xl">Shirts for your event, priced per piece.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#161214]/75">
            Every price includes a front print. Add a back or sleeve print when your design needs it.
          </p>
        </div>
      </section>

      {/* 2. Price cards */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col p-8 border-2"
              style={{ borderColor: card.highlight ? ROSE : 'rgba(22,18,20,0.15)' }}
            >
              <h2 className="text-2xl">{card.title}</h2>
              {card.label && (
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#161214]/60">{card.label}</p>
              )}
              <p className="mt-8 text-5xl font-bold">{card.price}</p>
              <p className="text-sm text-[#161214]/70">{card.unit}</p>

              {card.lines.length > 0 && (
                <div className="mt-8 space-y-3 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#161214]/60">Front print</p>
                  {card.lines.map((line) => (
                    <div key={line.label} className="flex justify-between gap-4 border-b border-[#161214]/10 pb-3">
                      <span>{line.label}</span>
                      <span className="font-semibold">{line.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#161214]/60">Add-ons</p>
                {ADDONS.map((a) => (
                  <div key={a.label} className="flex justify-between gap-4 border-b border-[#161214]/10 pb-3">
                    <span>{a.label}</span>
                    <span className="font-semibold" style={{ color: ROSE }}>{a.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Stock designs */}
      <section className="px-6 lg:px-10 py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2>Ready-made designs</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#161214]/75">
              Pick one of our ready-made designs and we&rsquo;ll print it as is, with no changes to the artwork.
            </p>
          </div>
          <div className="lg:col-span-5 bg-white p-8 space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#161214]/60">Add-ons</p>
            {ADDONS.map((a) => (
              <div key={a.label} className="flex justify-between gap-4 border-b border-[#161214]/10 pb-3">
                <span>{a.label}</span>
                <span className="font-semibold" style={{ color: ROSE }}>{a.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Where your print goes */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="max-w-2xl">Where your print goes</h2>
          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 max-w-xl mx-auto">
              <ShirtOutline view="front" />
              <ShirtOutline view="back" />
            </div>
            <ol className="lg:col-span-5 space-y-6">
              {[
                { n: 1, t: 'Quarter front', d: 'Small print on the chest', p: '$22' },
                { n: 2, t: 'Full front', d: 'Large print across the chest', p: '$25' },
                { n: 3, t: 'Back', d: 'Names, dates or a big design', p: '+$5' },
                { n: 4, t: 'Sleeve', d: 'A small mark on the sleeve', p: '+$2' },
              ].map((item) => (
                <li key={item.n} className="flex gap-5 items-start border-b border-[#161214]/10 pb-6">
                  <span className="flex-none w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center" style={{ background: ROSE }}>
                    {item.n}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold">{item.t}</p>
                    <p className="text-sm text-[#161214]/70">{item.d}</p>
                  </div>
                  <span className="font-semibold">{item.p}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 text-sm text-[#161214]/60">
            T-shirt prices shown. Long sleeves and hoodies include a front print at their base price.
          </p>
        </div>
      </section>

      {/* 5. Calculator */}
      <section className="px-6 lg:px-10 py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="max-w-2xl">Build your price</h2>
          <p className="mt-6 max-w-2xl text-[#161214]/75">Choose your garment, print and quantity to see your estimate.</p>
          <div className="mt-12">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* 6. Closing */}
      <section className="px-6 lg:px-10 py-28 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2>Planning an event?</h2>
          <p className="text-lg leading-relaxed text-[#161214]/75">
            Tell us the date, how many shirts and your idea. We&rsquo;ll send a quote and a design proof before anything is printed.
          </p>
          <a href="/#contact" className="inline-block px-10 py-4 text-white text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity" style={{ background: ROSE }}>
            Request a quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ShirtOutline({ view }: { view: 'front' | 'back' }) {
  const markers =
    view === 'front'
      ? [
          { n: 1, x: 100, y: 110 },
          { n: 2, x: 100, y: 170 },
          { n: 4, x: 46, y: 100 },
        ]
      : [
          { n: 3, x: 100, y: 120 },
          { n: 4, x: 154, y: 100 },
        ]
  return (
    <figure>
      <svg viewBox="0 0 200 220" className="w-full h-auto" aria-label={`T-shirt ${view} view`} role="img">
        <path
          d="M70 20 L40 40 L8 78 L30 100 L50 80 L50 210 L150 210 L150 80 L170 100 L192 78 L160 40 L130 20 Q100 36 70 20 Z"
          fill="#fff"
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {view === 'front' && <path d="M70 20 Q100 46 130 20" fill="none" stroke={INK} strokeWidth="2" />}
        {markers.map((m) => (
          <g key={`${view}-${m.n}`}>
            <circle cx={m.x} cy={m.y} r="11" fill={ROSE} />
            <text x={m.x} y={m.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{m.n}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#161214]/60">{view}</figcaption>
    </figure>
  )
}
