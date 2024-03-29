/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'customBtn': '7rem',
        '128': '33rem',
        '150': '48rem',
    },
    margin:{
      '100' : "42rem"
    },
    height:{
      '100' : "42rem"
    }
    },
  },
  plugins: [],
}