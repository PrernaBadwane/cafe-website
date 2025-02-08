/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clicker: ['"Clicker Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors:{
        primary:{
          10:"#1E1E1E",
          20:"#603809"
        },
        secondary:{
          10: "#F9C06A",
          15:"#F9C06A6B",
          20:"#fff9f1"
        },
        accent:{
          10:"#707070"
        }
      }
    },
  },
  plugins: [],
}

