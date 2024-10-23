/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      fontWeight: {
        bold: ['700', '800', '900'],
      },
    },
  },
  plugins: [],
}
