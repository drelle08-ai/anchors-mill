'use client'

import { useState } from 'react'
import { CustomDTF } from './CustomDTF'
import { PrintOnDemand } from './PrintOnDemand'

export function ShopTabs() {
  const [activeTab, setActiveTab] = useState<'custom' | 'pod'>('custom')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-slide-up">
        <p className="text-khaki text-xs uppercase tracking-widest mb-4 font-light">
          Shop
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-light text-primary-50 mb-8">
          Choose Your <span className="text-khaki">Path</span>
        </h1>
      </div>

      {/* Toggle Tabs */}
      <div className="flex justify-center mb-16 animate-fade-in">
        <div className="inline-flex border border-khaki/30 rounded-none">
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-8 py-4 font-light uppercase tracking-widest text-sm transition-all duration-300 ${
              activeTab === 'custom'
                ? 'bg-khaki text-charcoal'
                : 'bg-charcoal text-khaki hover:bg-khaki/10'
            }`}
          >
            Custom DTF
          </button>
          <div className="w-px bg-khaki/30"></div>
          <button
            onClick={() => setActiveTab('pod')}
            className={`px-8 py-4 font-light uppercase tracking-widest text-sm transition-all duration-300 ${
              activeTab === 'pod'
                ? 'bg-khaki text-charcoal'
                : 'bg-charcoal text-khaki hover:bg-khaki/10'
            }`}
          >
            Print-on-Demand
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === 'custom' && <CustomDTF />}
        {activeTab === 'pod' && <PrintOnDemand />}
      </div>
    </div>
  )
}
