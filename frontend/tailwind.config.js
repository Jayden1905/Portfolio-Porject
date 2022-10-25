/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        luxurious: ["Luxurious Roman"],
        work: ["Work Sans"],
      },
      colors: {
        primary: "#151921",
        secondary: "#98C1D9",
      },
    },
  },
  plugins: [],
};
