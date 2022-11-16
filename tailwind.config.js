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
        sans: ["var(--font-inter)", ...fontFamily.sans],
        Raleway: ["Raleway", ...fontFamily.sans],
        mono: ["var(--font-roboto)", ...fontFamily.mono],
        Rubik: ["var(--font-rubik)", ...fontFamily.sans],
        Manrope: ["var(--font-manrope)", ...fontFamily.sans],
        Cabin: ["var(--font-cabin)", ...fontFamily.sans],
      },
      animation: {
        "slide-down":
          "slide-down 0.3s ease-in-out var(--animation-delay) backwards",
        "line-extend": "line-extend 0.8s ease",
        "slide-up-appear":
          "slide-up-appear 0.8s ease var(--animation-delay) backwards",
        "fade-appear-below":
          "fade-appear-below var(--animation-delay) ease-in-out",
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
        "fade-appear-below": {
          from: {
            transform: "translateY(1rem)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0rem)",
            opacity: 1,
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
