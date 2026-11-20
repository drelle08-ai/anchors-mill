export type Product = {
  id: string
  name: string
  image: string
}

export type Category = {
  slug: string
  name: string
  blurb: string
  cover: string
  intro: string
  products: Product[]
}

const SQ = 'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31'

export const CATEGORIES: Category[] = [
  {
    slug: 'tshirts',
    name: 'T-Shirts',
    blurb: 'Everyday essentials with bold graphics.',
    cover: `${SQ}/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png`,
    intro: 'Everyday essentials with bold graphics, from statement pieces to quiet classics.',
    products: [
      { id: 'jesus-tee', name: 'Jesus Over Everything T-Shirt', image: `${SQ}/4e801ddb-58f4-418c-85f1-1d2a23175c3a/JesusOEtsirt.png` },
      { id: 'rob-hell', name: 'Rob Hell T-Shirt', image: `${SQ}/f42cec8e-ddf1-45c8-bd83-8ccb6aab32c3/Rob+hell-+-+Front.png` },
      { id: 'blah-tee', name: 'Blah! Blah! Blah! T-Shirt', image: '/products/tshirt-blah.webp' },
      { id: 'faith-tee', name: 'Faith, Hope, Love T-Shirt', image: '/products/tshirt-faith-hope-love.webp' },
    ],
  },
  {
    slug: 'hoodies',
    name: 'Hoodies',
    blurb: 'Cozy layers with the Anchor’s Mill look.',
    cover: `${SQ}/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg`,
    intro: 'Cozy layers with the Anchor’s Mill look, built for cooler days.',
    products: [
      { id: 'jesus-hoodie', name: 'Jesus Over Everything Hoodie', image: `${SQ}/20f96128-1fef-484b-907b-1e12e6786c65/JesusOverEverythinghoodie+Medium.jpeg` },
    ],
  },
  {
    slug: 'sweatshirts',
    name: 'Sweatshirts',
    blurb: 'Relaxed fits built for everyday wear.',
    cover: '/products/sweatshirt-pjs-cocoa.webp',
    intro: 'Relaxed fits built for everyday wear, with graphics that feel like the holidays.',
    products: [
      { id: 'pjs-sweatshirt', name: 'PJs, Cocoa & Candy Canes Sweatshirt', image: '/products/sweatshirt-pjs-cocoa.webp' },
    ],
  },
  {
    slug: 'babies',
    name: 'Infants & Babies',
    blurb: 'Little ones, big statements.',
    cover: '/products/babies-onesie-emmett.webp',
    intro: 'Little ones, big statements. Soft, simple pieces for the youngest members of the family.',
    products: [
      { id: 'emmett-onesie', name: 'Personalized Baby Bodysuit', image: '/products/babies-onesie-emmett.webp' },
      { id: 'siblings-tee', name: 'Big Brother & Little Sister Tees', image: '/products/tshirt-big-little-siblings.webp' },
    ],
  },
]

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)
}
