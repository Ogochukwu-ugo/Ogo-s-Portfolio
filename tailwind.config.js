/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-color': '#3a0088',
        'brand-color1': '#5000bb',
        'logo-color': '#cbb26a',
        'dark-purple': '#240055',
        'text-color': '#d8c690',
        'accent-color': '#be9e44',
      }
    },
  },
  plugins: [],
}

