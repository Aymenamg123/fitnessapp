/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-teal': '#00FFD1',
        'teal-dark': '#00CCA8',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
