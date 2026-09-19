/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#003399',
          hover: '#0044cc',
        },
      },
    },
  },
  plugins: [],
}

