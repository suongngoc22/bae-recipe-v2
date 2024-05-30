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
        neutral40: '#A9A9A9',
        neutral20: '#D9D9D9',
      },
      boxShadow: {
        'btnShadow': '0px 5px 35px 5px',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.15s ease-out forwards',
        'slide-down': 'slide-down 0.15s ease-out forwards',
      },

    },
  },
  plugins: [],
}