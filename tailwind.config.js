/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        latoLight: "LatoLight",
        latoBold: "LatoBold",
        latoReg: "LatoReg"
      }
    },
    colors:{
      'greenc':{
        100: '#D8F3DC',
        200: '#B7E4C7',
        300: '#95D5B2',
        400: '#74C69D',
        500: '#52B788',
        600: '#40916C',
        700: '#2D6A4F',
        800: '#1B4332',
        900: '#081C15'
      },
      'black1': '#353535',
      'green1': '#3C6E71',
      'white1': '#FFFFFF',
      'grey1': '#D9D9D9',
      'blue1': '#284B63',
      'grey2': '#eeeeee',
      'black2': '#202020'
    }
  },
  plugins: [],
}

