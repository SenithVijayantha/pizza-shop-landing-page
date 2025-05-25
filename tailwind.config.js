/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'rgb(35, 21, 18)',
        'secondary-dark':'rgb(27, 18, 14)',
        
      },
    },
  },
  plugins: [],
}