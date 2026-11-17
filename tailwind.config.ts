import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2B2F36',
        cobalt: '#0047AB',
        'cobalt-dark': '#003A8C',
        'cobalt-light': '#7FA6F5',
        mist: '#F2F4F7',
        primary: {
          50: '#FFFFFF',
          100: '#F2F4F7',
          200: '#E5E8EE',
          300: '#C9CED8',
          400: '#9AA3B2',
          500: '#6B7280',
          600: '#4B5260',
          700: '#3A4050',
          800: '#2B2F36',
          900: '#1A1D23',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Kaushan Script"', 'cursive'],
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
