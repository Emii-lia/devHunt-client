/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D2E3F9",
          200: "#A5C7F3",
          300: "#77ABED",
          400: "#4A8FE7",
          500: "#2A6BBF",
          600: "#1F5199",
          700: "#153870",
          800: "#0A1E46",
          900: "#00141F",
        },
        secondary: {
          100: "#D3EAF7",
          200: "#A7D5EF",
          300: "#7ABFE7",
          400: "#4DA9DF",
          500: "#2E8FC6",
          600: "#2274A1",
          700: "#18597C",
          800: "#0D3F57",
          900: "#012433",
        },
        customBlue: {
          100: "#D7EDFD",
          200: "#AFDFFA",
          300: "#88D1F6",
          400: "#60C3F3",
          500: "#3AB3F2",
          600: "#298DC0",
          700: "#1A6790",
          800: "#0B415F",
          900: "#001C2F",
        },
        customGreen: {
          100: "#D5F4F7",
          200: "#ABEAF0",
          300: "#80E0E9",
          400: "#56D5E3",
          500: "#2BCBDC",
          600: "#22A1B1",
          700: "#1A7686",
          800: "#114C5B",
          900: "#092232",
        },
        customGray: {
          100: "#BEC5B8",
          200: "#869388",
          300: "#4E5B59",
          400: "#27302A",
          500: "#1A2601",
          600: "#131B00",
          700: "#0D1300",
          800: "#060900",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Roboto Mono", "Menlo", "monospace"],
      },
      fontSize: {
        xs: ".75rem", // Extra Small
        sm: ".875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra Large
        "2xl": "1.5rem", // 2 Extra Large
        "3xl": "1.875rem", // 3 Extra Large
        "4xl": "2.25rem", // 4 Extra Large
        "5xl": "3rem", // 5 Extra Large
        "6xl": "4rem", // 6 Extra Large
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeight: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      
    },
  },
  plugins: [require("daisyui")],
};
