import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Anchor's Mill - Premium Apparel",
  description: 'Bold, quality-first apparel for the modern professional. Discover our curated collection of t-shirts and custom designs.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
      <body className="bg-primary-50">
        {children}
      </body>
    </html>
  )
}
