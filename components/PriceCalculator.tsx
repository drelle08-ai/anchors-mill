'use client'

import { useState } from 'react'

const BASE = { quarter: 22, full: 25, long: 28, hoodie: 35 }
const BACK = 5
const SLEEVE = 2

type Garment = 'tshirt' | 'long' | 'hoodie'
type Front = 'quarter' | 'full'

const money = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export function PriceCalculator() {
  const [garment, setGarment] = useState<Garment>('tshirt')
  const [front, setFront] = useState<Front>('quarter')
  const [back, setBack] = useState(false)
  const [sleeve, setSleeve] = useState(false)
  const [qty, setQty] = useState(24)

  const base = garment === 'tshirt' ? BASE[front] : garment === 'long' ? BASE.long : BASE.hoodie
  const perPiece = base + (back ? BACK : 0) + (sleeve ? SLEEVE : 0)
  const quantity = Math.max(1, Math.floor(qty) || 1)
  const total = perPiece * quantity

  const option = (active: boolean) =>
    `flex items-center justify-center px-4 py-3 border text-sm font-medium cursor-pointer transition-colors ${
      active ? 'bg-[#BE185D] border-[#BE185D] text-white' : 'border-[#161214]/25 text-[#161214] hover:border-[#BE185D]'
    }`

  return (
    <div className="grid lg:grid-cols-12 gap-10 border border-[#161214]/15 p-6 md:p-10">
      <div className="lg:col-span-7 space-y-8">
        <fieldset>
          <legend className="text-xs font-semibold uppercase tracking-[0.2em] mb-3">Garment</legend>
          <div className="grid grid-cols-3 gap-2">
            <button type="button" className={option(garment === 'tshirt')} onClick={() => setGarment('tshirt')}>T-shirt</button>
            <button type="button" className={option(garment === 'long')} onClick={() => setGarment('long')}>Long sleeve</button>
            <button type="button" className={option(garment === 'hoodie')} onClick={() => setGarment('hoodie')}>Hoodie</button>
          </div>
        </fieldset>

        {garment === 'tshirt' && (
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-[0.2em] mb-3">Front print</legend>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" className={option(front === 'quarter')} onClick={() => setFront('quarter')}>Quarter front · $22</button>
              <button type="button" className={option(front === 'full')} onClick={() => setFront('full')}>Full front · $25</button>
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="text-xs font-semibold uppercase tracking-[0.2em] mb-3">Add-ons</legend>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" aria-pressed={back} className={option(back)} onClick={() => setBack(!back)}>Back print +$5</button>
            <button type="button" aria-pressed={sleeve} className={option(sleeve)} onClick={() => setSleeve(!sleeve)}>Sleeve print +$2</button>
          </div>
        </fieldset>

        <div>
          <label htmlFor="qty" className="block text-xs font-semibold uppercase tracking-[0.2em] mb-3">Quantity</label>
          <input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-40 px-4 py-3 border border-[#161214]/25 focus:border-[#BE185D] focus:outline-none"
          />
        </div>
      </div>

      <div className="lg:col-span-5 bg-[#161214] text-white p-8 flex flex-col justify-between gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Price per piece</p>
          <p className="mt-2 text-6xl font-bold text-[#BE185D]">{money(perPiece)}</p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Total for {quantity}</p>
          <p className="mt-2 text-4xl font-bold">{money(total)}</p>
          <p className="mt-6 text-sm text-white/70">Example: 24 T-shirts with a quarter front = $22 each, $528 total.</p>
        </div>
        <div className="space-y-4">
          <p className="text-xs text-white/60">An estimate to help you plan. Your final price is on your quote.</p>
          <a href="/#contact" className="block text-center px-6 py-4 bg-[#BE185D] text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-[#161214] transition-colors">
            Request a quote
          </a>
        </div>
      </div>
    </div>
  )
}
