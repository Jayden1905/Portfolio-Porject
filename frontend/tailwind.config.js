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
        primary: "#151513",
        secondary: "white",
      },
    },
  },
  plugins: [],
};
