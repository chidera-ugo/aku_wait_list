/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      colors: {
        primary: {
          700: '#581689',
          800: '#4A1274',
          navy: '#07172F',
        },
        secondary: {
          200: '#CABDFF',
        },
        neutral: {
          00: '#FFFFFF',
          50: '#E2E2E2',
          200: '#F7F7F7',
          300: '#6F6F6F',
          400: '#6F767E',
          500: '#EFEFEF',
          600: '#272B30',
          700: '#1A1D1F',
          800: '#000000',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
