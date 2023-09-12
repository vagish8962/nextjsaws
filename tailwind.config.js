/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "hard-green": "#86D2CC",
    "primary-green": "#1D7D6D",
    white: "#FFFFFF",
    "green-text": "#125B4F",
    red: "#F43D4F",
    black: "#000000",
   
    blue: {
      100: '#C4CCF9',
    },
    orange: {
      400: '#FFDC99',
      500: '#EACB6E',
      600: '#FBC098',
      900: '#FFA800',
      500: "#EACB6E",
      900: "#FFA800",
    },
    gray: {
      200: "#F2F2F2",
      300: "#c0c0c0",
      500: "#555555",
    },
    gray:{
      100: "#FFFBF8",
      200: '#F2F2F2',
      300: '#c0c0c0',
      500: '#555555',
      
    },
    green: {
      500: "#86D2CC",
      800: "#1D7D6D",
      900: "#125B4F",
    },
  },
};
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        unilevershilling: ["Unilever Shilling", "sans-serif"],
        unilevershillingMedium: ["Unilever Shilling Medium", "sans-serif"],
        unilevershillingBold: ["Unilever Shilling Bold", "sans-serif"],
        shireTypesPro: ["ShireTypesPro", "sans-serif"],
      },
    },
  },
  spacing: {
    120: "30rem",
  },
  plugins: [],
};
