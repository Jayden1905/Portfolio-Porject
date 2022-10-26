/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        luxurious: ["Luxurious Roman"],
        work: ["Work Sans"],
      },
      colors: {
        primary: "#feffff",
        dark: "#101827",
      },
    },
  },
  plugins: [],
};
