/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkColdBlue': {
        60: '#F3F6FF',
        70: '#DCE5FC',
        70: '#BEC9E4',
        80: '#A0ACCE',
        90: '#7E8BAF',
        100: '#616F94',
        200: '#4D5A7D',
        300: '#374466',
        400: '#232E4C',
        500: '#1A2543',
        600: '#101A37',
        700: '#081129',
        800: '#020A21',
      },
      'lightColdBlue': {
        100: '#F2F7FF',
        200: '#CFE2FF',
        300: '#ABCDFF',
        400: '#87B7FF',
        500: '#63A2FF',
        600: '#3F8CFF',
        700: '#1B77FF',
        800: '#0067FF',
      },
    },
    fontFamily: {
      'poppins': 'poppins',
      'roboto': 'roboto',
    },
    extend: {
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
    },
  },
  plugins: [],
}

