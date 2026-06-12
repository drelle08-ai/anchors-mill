import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Charcoal + Bold Khaki Luxury Palette
        primary: {
          50: '#F9F6F0',
          100: '#F3EDE0',
          200: '#E8E0CC',
          300: '#D4C9B0',
          400: '#C19A6B',
          500: '#B8860B',
          600: '#8B8062',
          700: '#745D4F',
          800: '#5C4B42',
          900: '#3D3530',
        },
        accent: {
          50: '#FEF9F0',
          100: '#FDF4E0',
          200: '#FCE9CC',
          300: '#F7D99B',
          400: '#D4A574',
          500: '#C19A6B',
          600: '#B8860B',
          700: '#9B7653',
          800: '#7D6B4F',
          900: '#5C4B3D',
        },
        khaki: '#C19A6B',
        darkkhaki: '#8B8062',
        lightkhaki: '#F9F6F0',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'border-pulse': 'borderPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgb(193, 154, 107)' },
          '50%': { borderColor: 'rgb(212, 165, 116)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
