/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'm-plus-rounded-1c': ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      colors: {
        secondary: '#2B0226',
      },
    },
  },
  plugins: [],
}
