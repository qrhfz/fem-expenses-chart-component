/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-white": "#FFFBF6",
        "cream-bg": "#F8E9DD",
        "med-brown": "#92857A",
        "dark-brown": "#382314",
        "my-cyan": "#76B5BC",
        "my-red": "#EC755D",
      }
    },
  },
  plugins: [],
}
