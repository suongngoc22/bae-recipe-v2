/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'onboarding': "url('/bg-onboarding.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'balsamiq': ['Balsamiq Sans', 'sans-serif']
      },
      colors: {
        primary: '#ffa726',
        grey: '#808080',
        lightgray: '#56473F',
        neutral90: '#303030',
        neutral40: '#A9A9A9'
      },
      boxShadow: {
        'btnShadow': '0px 5px 35px 5px',
      }

    },
  },
  plugins: [],
}