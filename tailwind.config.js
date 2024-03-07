/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5eaf0',
          100: '#b3bdd3',
          200: '#8082b7',
          300: '#4d509b',
          400: '#1b1f7e',
          500: '#163172',
          600: '#132b61',
          700: '#102450',
          800: '#0d1d3f',
          900: '#0a162f',
        },
        secondary: {
          50: '#f0f5fc',
          100: '#d0e2fb',
          200: '#a1c5f7',
          300: '#72a8f3',
          400: '#448aee',
          500: '#1e56a0', 
          600: '#1a4c90',
          700: '#17407b',
          800: '#123366',
          900: '#0f2952',
        },
        customBlue: {
          50: '#f0f5fc',
          100: '#d0e2fb',
          200: '#a1c5f7',
          300: '#72a8f3',
          400: '#448aee',
          500: '#1e56a0', 
          600: '#1a4c90',
          700: '#17407b',
          800: '#123366',
          900: '#0f2952',
        },
        customGray: {
          '50': '#F2F7FC',
          '100': '#E5EFF8',
          '200': '#CBDFF0',
          '300': '#ACC7E5',
          '400': '#84A8D8',
          '500': '#D6E4F0', 
          '600': '#5994B1',
          '700': '#3C6F8A',
          '800': '#274C64',
          '900': '#192F44',
        },
        white: {
          50: '#fdfdfd',
          100: '#fbfbfb',
          200: '#f9f9f9',
          300: '#f7f7f7',
          400: '#f5f5f5',
          500: '#f6f6f6', 
          600: '#f4f4f4',
          700: '#f2f2f2',
          800: '#f0f0f0',
          900: '#eeeeee',
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
