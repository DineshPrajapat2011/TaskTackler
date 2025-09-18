import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#e6f0ff',
          200: '#bfd9ff',
          300: '#99c2ff',
          400: '#4d94ff',
          500: '#1f6bff',
          600: '#1554cc',
          700: '#0f4099',
          800: '#0a2b66',
          900: '#051733'
        }
      }
    }
  },
  plugins: []
}

export default config
