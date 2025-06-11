import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class', '[data-theme="dark"]'], // 👈 Add this
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        xl: '1440px',
      },
      colors: {
        'elevation-50': 'var(--theme-elevation-50)',
        'elevation-100': 'var(--theme-elevation-100)',
        'elevation-150': 'var(--theme-elevation-150)',
        'elevation-250': 'var(--theme-elevation-250)',
        'elevation-300': 'var(--theme-elevation-300)',
        'elevation-400': 'var(--theme-elevation-400)',
        'elevation-500': 'var(--theme-elevation-500)',
        'elevation-800': 'var(--theme-elevation-800)',
        'elevation-1000': 'var(--theme-elevation-1000)',
      },
      fontFamily: {},
    },
  },
}

export default config
