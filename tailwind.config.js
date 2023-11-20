/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-black": "#02070f",
        "blue-deep-sky": "#00d8ff",
        "blue-bell": "#9999cc",
        "blue-rock": "#99acc5",
        "blue-periwinkle": "#c2d0e3",
        "solitude": "#e0e6ec",
        "solitude-light": "#e9edf3",
        "primary-red": "#EA526F",
        "primary-white": "#f0f4fa",
      },
      fontFamily: {
        "sans": ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        "serif": ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
