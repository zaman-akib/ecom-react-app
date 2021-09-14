const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily: {
      'trebuchet': ['Trebuchet MS'],
    },
    colors: {
      teal: colors.teal,
      orange: colors.orange,
      green: colors.green,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      white: colors.white,
      indigo: colors.indigo,
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
