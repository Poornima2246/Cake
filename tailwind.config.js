 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC8DA7",
        secondary: "#984444",
      },
      backgroundImage: {
        backimg: "url('../src/Asset/h6.png')",
         back1: "url('../src/Asset/back1.png)"
      },
      fontFamily: {
        fntprimary: ['Rochester', 'cursive' ],
        fntsecondary: ["Sacramento", "cursive"],
        fntthird :["Playfair Display", "serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}