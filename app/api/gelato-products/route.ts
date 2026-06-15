import { NextResponse } from 'next/server'
import { GelatoApi } from 'gelato-api'

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
const DEFAULT_BASE_PRICE = 12

// Fallback mock products for when Gelato API is unavailable
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
    const apiKey = process.env.NEXT_PUBLIC_GELATO_API_KEY

    if (!apiKey) {
      console.warn('Gelato API key not configured, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    // Initialize Gelato client with API key
    const gelato = new GelatoApi({ apiKey })

    // Get the first catalog
    const catalogs = await gelato.products.getCatalogs({ limit: 1 })
    const firstCatalog = catalogs.data?.[0]

    if (!firstCatalog?.catalogUid) {
      console.warn('No Gelato catalogs found, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    // Get products from the first catalog
    const productsResponse = await gelato.products.getProductsInCatalog(
      firstCatalog.catalogUid,
      { limit: 12, offset: 0 }
    )

    const gelatoProducts = productsResponse.products || []

    if (gelatoProducts.length === 0) {
      console.warn('No products in Gelato catalog, using fallback products')
      return NextResponse.json({ products: FALLBACK_PRODUCTS })
    }

    // Fetch pricing for all products at once (more efficient than individual calls)
    const productUids = gelatoProducts.slice(0, 12).map((p: any) => p.productUid)
    let pricesMap: { [key: string]: number } = {}

    try {
      // Get pricing for each product
      for (const uid of productUids) {
        const prices = await gelato.products.getPrices(uid)
        pricesMap[uid] = prices?.[0]?.price || DEFAULT_BASE_PRICE
      }
    } catch (err) {
      console.warn('Error fetching prices from Gelato:', err)
      // Fall back to default pricing if price API fails
      productUids.forEach((uid: string) => {
        pricesMap[uid] = DEFAULT_BASE_PRICE
      })
    }

    // Transform Gelato products to our format
    const transformedProducts: ProductCard[] = gelatoProducts
      .slice(0, 12)
      .map((product: any, index: number) => {
        const basePrice = pricesMap[product.productUid] || DEFAULT_BASE_PRICE
        const markupPrice = Math.round(basePrice * MARKUP_MULTIPLIER * 100) / 100
        const productName = product.attributes?.type || `Product ${index + 1}`

        return {
          id: product.productUid,
          name: productName,
          basePrice,
          markupPrice,
          image:
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
          colors: ['Black', 'White', 'Navy', 'Grey'],
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        }
      })

    return NextResponse.json({ products: transformedProducts })
  } catch (error) {
    console.warn('Error fetching from Gelato API, using fallback products:', error)
    // Return fallback products instead of error
    return NextResponse.json({ products: FALLBACK_PRODUCTS })
  }
}
