/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        pink: '#fe349d',
      },
    },
  },
  plugins: [],
}
