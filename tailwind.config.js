/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["Hanken\\ Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#CAC9FF",
        secondary: "#2F2CE9",
        darknavy: "#303B59",
        rosered: { 200: "#FFF6F6", 600: "#FF5555" },
        mustard: { 200: "#FFFBF4", 600: "#FFB21E" },
        grass: {
          200: "#F2FCF9",
          600: "#00BB8F",
        },
        cobalt: { 200: "#F3F4FD", 600: "#1125D6" },
      },
      fontSize: { "3xl": "2rem" },
    },
  },
  plugins: [],
};
