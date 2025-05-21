/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#A3C9D9",
        beige: "#F9F5EC"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
}