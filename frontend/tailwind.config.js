/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Condensed"],
        saira_light: ["Saira Condensed Light"],
      },
      colors: {
        primary: "#feffff",
        dark: "#151515",
        secondary: "#191b1d",
      },
    },
  },
  plugins: [],
};
