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
        'balsamiq': ['Balsamiq Sans', 'sans-serif']
      },
      colors: {
        primary: '#ffa726',
        grey: '#808080',
        lightgray: '#56473F'
      },
      boxShadow: {
        'btnShadow': '0px 5px 35px 5px',
      }

    },
  },
  plugins: [],
}