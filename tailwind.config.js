/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '1001': '1001'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}

