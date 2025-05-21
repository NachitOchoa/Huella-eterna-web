/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F9F5EC",
        pastelBlue: "#A3C9D9",
        olive: "#7B9E89",
        golden: "#D4A373",
      },
    },
    fontFamily: {
      serif: ["Georgia", "serif"],
    },
  },
  plugins: [],
};
