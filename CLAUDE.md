# Anchor's Mill - Premium Apparel E-Commerce Website

## Project Overview

Anchor's Mill is a luxury apparel e-commerce website for a Georgia-based t-shirt and clothing brand. The site features a dark charcoal aesthetic with bold khaki accents, custom DTF (Direct-to-Film) apparel requests, and print-on-demand integration ready.

**Live Site:** https://www.anchorsmillclothing.com

## Technology Stack

- **Framework:** Next.js 14.2.35 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.3
- **Hosting:** Vercel
- **Domain:** Registered through Vercel
- **Icons:** Lucide React

## Project Structure

```
anchors-mill-2.0/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── shop/
│   │   └── page.tsx        # Shop page with toggle tabs
│   └── globals.css         # Global styles, animations, accessibility
├── components/
│   ├── Header.tsx          # Navigation & logo
│   ├── Hero.tsx            # Hero section with large serif typography
│   ├── Logo.tsx            # Modern anchor logo SVG
│   ├── ProductCard.tsx     # Product card with wishlist
│   ├── FeaturedProducts.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   ├── Footer.tsx
│   ├── ShopTabs.tsx        # Toggle between Custom DTF and POD
│   ├── CustomDTF.tsx       # Custom design request section
│   └── PrintOnDemand.tsx   # POD section (Printify ready)
├── tailwind.config.ts      # Design tokens & custom config
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── vercel.json             # Vercel deployment configuration
└── README.md
```

## Design System

**Color Palette:**
- **Primary:** Dark Charcoal (#1A1A1A)
- **Accent:** Bold Khaki (#C19A6B)
- **Secondary:** Dark Khaki (#8B8062)
- **Background:** Light Khaki (#F9F6F0)
- **Text:** Light primary colors on dark background

**Typography:**
- **Headings:** Cormorant (serif) - elegant, luxury feel
- **Body:** Montserrat (sans-serif) - modern, clean

**Style:** Neobrutalism + Exaggerated Minimalism
- Bold borders and high contrast
- Large, statement-making typography
- Minimal decoration, maximum impact

**Animations:**
- fadeIn (0.5s ease-in-out)
- slideUp (0.5s ease-out)
- scaleIn (0.3s ease-out)
- All animations respect `prefers-reduced-motion`

## Key Features

### Homepage
- **Hero Section:** Large serif typography "Bold Minimal Luxury" with product image
- **About Section:** Brand story with stats
- **Testimonials:** Customer social proof
- **Newsletter:** Email signup with gradient background
- **Footer:** Links and social media

### Shop Page (Toggle Tabs)

**Custom DTF Section:**
- Portfolio gallery of existing designs
- Custom design request form
- Fields: name, email, description, quantity, budget
- Form submission handling

**Print-on-Demand Section:**
- Product grid with pricing structure
- Placeholder products (ready for Printify API integration)
- Add to cart / Wishlist functionality
- Integration notes showing readiness for Printify

### Responsive Design
- Mobile-first (375px → 1440px+)
- Responsive images with lazy loading
- Touch targets minimum 44×44px
- Smooth animations that respect motion preferences

## Deployment

### Live Environment
- **Host:** Vercel
- **Domain:** www.anchorsmillclothing.com
- **Automatic deploys:** Triggered on push to main branch

### Deploy New Changes

1. **Make code changes locally**
```bash
cd /Users/drelle/Desktop/Claude\'s\ Folder/anchors-mill-2.0
```

2. **Test locally (optional but recommended)**
```bash
npm run dev
# Visit http://localhost:3000 to test
```

3. **Commit and push to GitHub**
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin main
```

4. **Vercel auto-deploys** - Watch at vercel.com/Vondrelle's projects/anchors-mill

### Build Command
```bash
npm run build
```

### Dev Server
```bash
npm run dev
```

## Git Workflow

**Repository:** https://github.com/drelle08-ai/anchors-mill

**Authentication:** SSH key configured locally

**Branch:** main (production branch)

**Standard workflow:**
1. Make changes locally
2. Test with `npm run dev`
3. Commit with descriptive message
4. Push to origin main
5. Vercel auto-deploys

## Environment Variables

**NEXT_PUBLIC_GELATO_API_KEY** - Your Gelato API credentials (format: `api_key:password`)
- Added to Vercel production environment
- Used by PrintOnDemand component to fetch real products
- Must be added to `.env.local` for local development

## Accessibility

✅ WCAG AAA Compliance
- Color contrast 4.5:1+ (WCAG AA/AAA)
- Focus states on all interactive elements (2px khaki outline)
- Semantic HTML structure
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- Alt text for images
- Screen reader friendly

## Content

### Products
Featured products are stored in `components/FeaturedProducts.tsx`. Update the `FEATURED_PRODUCTS` array to add/modify products.

**Product fields:**
- id: unique identifier
- name: product display name
- price: USD price
- image: image URL (from Squarespace CDN)
- badge: (optional) "bestseller", "new", "limited"
- rating: star rating (1-5)
- reviews: number of reviews

### Images
All product images currently use URLs from:
- `images.squarespace-cdn.com` (from old Anchor's Mill website)
- `images.unsplash.com` (placeholder images)

## Future Enhancements

### Gelato Integration (Live)
✅ **Active Gelato API integration:**
- Real-time product catalog fetching
- Automatic 150% markup pricing
- Error handling and loading states

**Next phase:**
1. Implement shopping cart with order creation
2. Connect Gelato order API for checkout
3. Add order tracking and status updates
4. Test full end-to-end fulfillment flow

### E-Commerce
- Real shopping cart implementation
- Checkout flow
- Payment processing (Stripe/PayPal)
- Order management
- Inventory tracking

### Custom DTF
- Form submission to email/database
- Quote generation
- Design portfolio expansion
- Customer project gallery

## Troubleshooting

### Build fails locally
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
# or kill the process using port 3000
lsof -i :3000
kill -9 <PID>
```

### Vercel deployment fails
- Check build logs at vercel.com
- Ensure all commits are pushed: `git log -1`
- Verify no TypeScript errors: `npm run build`
- Clear Vercel build cache and redeploy

### SSL certificate warning
New domains take 5-15 minutes for SSL to be issued. Wait and try again.

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, fonts |
| `app/globals.css` | Global styles, animations, accessibility rules |
| `tailwind.config.ts` | Color tokens, animation definitions, theme config |
| `components/ShopTabs.tsx` | Toggle between Custom DTF and POD |
| `components/CustomDTF.tsx` | Custom design request form and portfolio |
| `components/PrintOnDemand.tsx` | POD products (Printify integration point) |
| `vercel.json` | Vercel build configuration |

## Performance Targets

- ✅ Images lazy-loaded
- ✅ Animations use transform/opacity (60fps)
- ✅ No layout shift (CLS < 0.1)
- ✅ Responsive design tested 375px-1440px+
- ✅ TypeScript strict mode enabled

## Contact & Support

**Website owner:** Drelle (drelle08@gmail.com)
**GitHub:** drelle08-ai
**Domain registrar:** Vercel

## Version History

- **v1.0 (Current)** - Initial launch
  - Custom DTF section fully functional
  - POD section ready for Printify integration
  - Custom domain connected
  - Dark charcoal + khaki aesthetic live
