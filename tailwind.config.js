/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        blog: {
          DEFAULT: '#ff2e63',
          secondary: '#ca244d',
        }
      }
    },
  },
  plugins: [],
}
