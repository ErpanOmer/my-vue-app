import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: 'er-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        mb: {
          max: '768px',
        },
      },
      fontFamily: {
        base: ['Helvetica Now Display', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#FD4B17',
        dark: '#242729',
        gray: '#A0A1A2',
        secondary: '#E2542E',
        background: '#F7F8FA',
        border: '#EBEDF0',
        salecolor: '#D50B28',
      }
    },
  },
  plugins: [
    typography
  ],
};