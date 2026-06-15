import { NextResponse } from 'next/server'

interface ProductCard {
  id: string
  name: string
  basePrice: number
  markupPrice: number
  image: string
  colors: string[]
  sizes: string[]
}

const MARKUP_MULTIPLIER = 2.5
const DEFAULT_BASE_PRICE = 15

// Fallback mock products for when Printify API is unavailable
const FALLBACK_PRODUCTS: ProductCard[] = [
  {
    id: 'tshirt-1',
    name: 'Premium T-Shirt',
    basePrice: 10,
    markupPrice: 25,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'hoodie-1',
    name: 'Comfort Hoodie',
    basePrice: 20,
    markupPrice: 50,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'crewneck-1',
    name: 'Classic Crewneck',
    basePrice: 12,
    markupPrice: 30,
    image: 'https://images.unsplash.com/photo-1503341455253-b2b723bb12d5?w=500&h=600&fit=crop',
    colors: ['Black', 'White', 'Navy', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'longsleeve-1',
    name: 'Performance Long Sleeve',
    basePrice: 15,
    markupPrice: 38,
    image:
      'https://images.squarespace-cdn.com/content/v1/6936df470b902d320ef93d31/0c32ad2c-eb1e-460c-88d8-aa704a32e81b/Anchorspolo+Medium.jpeg',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
]

export async function GET() {
  try {
    const apiKey = process.env.PRINTIFY_API_KEY

    if (!apiKey) {
      console.warn('Printify API key not configured, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    // Get Printify shop ID and catalog
    const shopsResponse = await fetch('https://api.printify.com/v1/shops.json', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (!shopsResponse.ok) {
      throw new Error(`Printify shops error: ${shopsResponse.statusText}`)
    }

    const shops = await shopsResponse.json()

    if (!Array.isArray(shops) || shops.length === 0) {
      console.warn('No Printify shops found, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    const shopId = shops[0].id

    // Get shop products
    const productsResponse = await fetch(
      `https://api.printify.com/v1/shops/${shopId}/products.json?limit=12`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )

    if (!productsResponse.ok) {
      console.warn('Printify products endpoint error, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    const productsData = await productsResponse.json()
    const printifyProducts = productsData.data || productsData || []

    if (printifyProducts.length === 0) {
      console.warn('No products in Printify catalog, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    // Transform Printify products to our format
    const transformedProducts: ProductCard[] = printifyProducts
      .slice(0, 12)
      .map((product: any) => {
        const basePrice = product.price?.amount || DEFAULT_BASE_PRICE
        const markupPrice = Math.round(basePrice * MARKUP_MULTIPLIER * 100) / 100

        return {
          id: product.id,
          name: product.title || 'Product',
          basePrice,
          markupPrice,
          image:
            product.images?.[0]?.src ||
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
          colors: ['Black', 'White', 'Navy', 'Grey'],
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        }
      })

    return NextResponse.json({ products: transformedProducts })
  } catch (error) {
    console.warn('Error fetching from Printify API, using fallback products:', error)
    // Return fallback products instead of error
    return NextResponse.json({ products: FALLBACK_PRODUCTS })
  }
}
