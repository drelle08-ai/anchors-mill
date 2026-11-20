import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Collections } from '@/components/Collections'
import { About } from '@/components/About'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Collections />
      <About />
      <Newsletter />
      <Footer />
    </main>
  )
}
