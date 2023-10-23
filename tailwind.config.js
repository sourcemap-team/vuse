/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // screens: {
        //   '3xl': '1800px',
        // },
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      fontFamily: {
        'sans': ['Gotham-Pro', 'sans-serif'],
      },
      colors: {
        ...colors,
        primary: "#1D1D1B"
      }
    },
  },
  plugins: [],
}
