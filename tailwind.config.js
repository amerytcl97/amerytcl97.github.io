/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", ...fontFamily.sans],
        Roboto: ["Roboto Mono", ...fontFamily.sans],
      },
      animation: {
        "slide-down":
          "slide-down 0.3s ease-in-out var(--animation-delay) backwards",
        "line-extend": "line-extend 0.8s ease",
        "slide-up-appear": "slide-up-appear 0.8s ease var(--animation-delay) backwards",
      },
      keyframes: {
        "slide-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-0.6rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0rem)",
          },
        },
        "line-extend": {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        "slide-up-appear": {
          "0%": {
            transform: "translateY(5rem)",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
