/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f9f9f9",
      },
      fontFamily: {
        inter: ['"Inter"', 'system-ui'],
        serif: ['system-ui'] // You can customize the serif font if needed
      },

      animation: {
        'spin-slow': 'spin 14s linear infinite', // Slows the spin down
      },
      
    },
  },
  plugins: [],
}

