# Anchor's Mill - Premium Apparel E-Commerce

A modern, production-grade e-commerce website for Anchor's Mill, featuring bold neobrutalist design with rose/gold aesthetics, smooth animations, and full responsive mobile support.

## Design System

**Palette:** Fashion Rose (#BE185D) + Hot Pink (#EC4899) + Gold (#D97706)
**Typography:** Cormorant (headings) + Montserrat (body)
**Style:** Neobrutalism + Exaggerated Minimalism
**Animations:** Smooth 150-300ms transitions respecting `prefers-reduced-motion`

## Features

- ✨ **Bold, Modern Design** - Neobrutalist aesthetic with high-contrast elements
- 📱 **Fully Responsive** - Mobile-first design (375px → 1440px+)
- 🛍️ **E-Commerce Ready** - Product showcase, wishlist, shopping cart
- ⚡ **Performance** - Next.js 14, optimized images, lazy loading
- ♿ **Accessible** - WCAG AAA compliance, semantic HTML, focus states
- 🎨 **Premium Animations** - Smooth, purposeful transitions and micro-interactions
- 🌙 **Dark Mode Support** - Theme-aware colors and contrast ratios

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd anchors-mill-2.0
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
anchors-mill-2.0/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles & animations
├── components/
│   ├── Header.tsx        # Navigation & logo
│   ├── Hero.tsx          # Hero section
│   ├── ProductCard.tsx   # Product component
│   ├── FeaturedProducts.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   ├── Footer.tsx
│   └── Logo.tsx          # Modern logo
├── tailwind.config.ts    # Design tokens & config
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to adjust the color palette. All colors are defined as CSS variables for easy theming.

### Products
Update the `FEATURED_PRODUCTS` array in `components/FeaturedProducts.tsx` to add/modify products.

### Copy
Update section text directly in component files. All content is easily editable.

### Images
Replace image URLs with your own product photography. Recommended image sizes:
- Hero: 1200×600px
- Product cards: 500×600px
- About: 800×600px

## Performance Notes

- Images are lazy-loaded by default
- Smooth animations respect `prefers-reduced-motion` for accessibility
- Tailwind CSS is tree-shaken for minimal bundle size
- All animations use `transform` and `opacity` for 60fps performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Accessibility Checklist

✓ Color contrast 4.5:1 (WCAG AAA)
✓ Focus states on all interactive elements
✓ Semantic HTML structure
✓ Alt text for images
✓ Keyboard navigation support
✓ Reduced motion support
✓ Screen reader friendly

## Next Steps

1. **E-commerce Integration:** Connect to payment processor (Stripe, PayPal)
2. **Product Database:** Replace mock products with real data from CMS/database
3. **User Accounts:** Add authentication and user profiles
4. **Search & Filters:** Implement product search and filtering
5. **Analytics:** Add tracking (Google Analytics, Mixpanel)
6. **Email Newsletter:** Wire up newsletter signup to email service

## License

Private - Anchor's Mill © 2024
