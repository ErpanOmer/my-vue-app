export default {
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
        lg: {
          max: '1023px',
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
      },
    },
  }
};