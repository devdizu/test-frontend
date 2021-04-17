const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      yellow: {
        DEFAULT: '#fff159',
      },
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
