/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      colors: {
        'cobalt': {
          50: "#e6eaed",
          100: "#ccd6db",
          200: "#b3c1c8",
          300: "#99acb6",
          400: "#8098a4",
          500: "#668392",
          600: "#4d6e80",
          700: "#33596d",
          800: "#1a455b",
          900: "#003049",
        },
        'scarlet': {
          50: '#fbeaea',
          100: '#f7d4d4',
          200: '#f3bfbf',
          300: '#efa9a9',
          400: '#eb9494',
          500: '#e67e7e',
          600: '#e26969',
          700: '#de5353',
          800: '#da3e3e',
          900: '#d62828'
        },
        'orange': {
          50: '#fef2e6',
          100: '#fde5cc',
          200: '#fdd9b3',
          300: '#fccc99',
          400: '#fbbf80',
          500: '#fab266',
          600: '#f9a54d',
          700: '#f99933',
          800: '#f88c1a',
          900: '#f77f00'
        },
        'yellow': {
          50: '#fff9ed',
          100: '#fef2db',
          200: '#feecc8',
          300: '#fee5b6',
          400: '#fedfa4',
          500: '#fdd992',
          600: '#fdd280',
          700: '#fdcc6d',
          800: '#fcc55b',
          900: '#fcbf49'
        },
        'baige': {
          100: '#f0ebcd',
          200: '#eee8c5',
          300: '#ece5be',
          400: '#eae2b7'
        }
      },
    },
  },
  plugins: [],
}

