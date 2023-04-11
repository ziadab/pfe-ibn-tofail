/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        primary: "#2c1e96",
      },
    },
  },
  plugins: [],
};
