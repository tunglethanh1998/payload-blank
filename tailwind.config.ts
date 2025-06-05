import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      colors: {
        meadow: 'var(--meadow)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
