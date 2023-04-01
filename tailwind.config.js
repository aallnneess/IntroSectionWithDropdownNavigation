/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'md': '1250px'
    },
    extend: {
      fontFamily: {
        sans: ['Epilogue', 'sans-serif']
      },
      colors: {
        Almost_White: 'hsl(0, 0%, 98%)',
        Medium_Gray: 'hsl(0, 0%, 41%)',
        Almost_Black: 'hsl(0, 0%, 8%)'
      },
      boxShadow: {
        'test': '0 10px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

