/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff1493',
        'primary-light': '#ff8fab',
        'primary-dark': '#ff1493',
        background: '#ffe0eb',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff8fab 0%, #ff1493 100%)',
      },
    },
  },
  plugins: [],
} 