import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: "Anchor's Mill - Bold Apparel",
  description: 'Bold apparel for T-shirts, hoodies, sweatshirts, and baby clothing. Made in Georgia.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#BE185D" />
      </head>
      <body className="bg-cream">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
