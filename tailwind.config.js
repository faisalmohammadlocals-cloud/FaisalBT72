/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './app/components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2bdcd2',
        'primary-content': '#171717',
        secondary: '#016968',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      },
      backgroundImage: {
        noise: `linear-gradient(
          to bottom,
          color-mix(in oklab, rgb(5, 5, 5) 0%, transparent),
          color-mix(in oklab, rgb(5, 5, 5) 100%, transparent)
        ), url('/images/noise.png')`
      }
    }
  },
  plugins: [],
}
