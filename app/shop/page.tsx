import { ShopTabs } from '@/components/ShopTabs'

export const metadata = {
  title: 'Shop - Anchor\'s Mill',
  description: 'Custom DTF apparel and print-on-demand products from Anchor\'s Mill',
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-charcoal pt-20">
      <ShopTabs />
    </main>
  )
}
