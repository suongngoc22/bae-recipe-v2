/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
      colors: {
        primary: '#ff7f11',
        grey: '#808080'
      }
      
    },
  },
  plugins: [],
}