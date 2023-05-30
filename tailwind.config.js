/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    screens: {
      xs: { min: "450px" },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryBlue: "#3178C6",
        anotherBlack: "#1E1E1E",
      },
      width: {
        container: "min(1100px, 100% - 4rem)",
      },
      backgroundImage: {
        gradient: "linear-gradient(#283a55, #0a192f, #101010)",
      },
      fontSize: {
        mainTitle: "clamp(2.25rem, 1.125rem + 3.75vw, 4.5rem)",
      },
      padding: {
        heroPadding: "clamp(11rem, -5rem + 20vw, 25rem)",
      },
    },
  },
  plugins: [],
};
