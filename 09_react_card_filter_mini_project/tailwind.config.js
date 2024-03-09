/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#1d1d34",
        white: "#ffffff",
        black: "#000000",
        bgDark2: "#40445c",
      }
    },
  },
  plugins: [],
}
