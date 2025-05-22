module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: { 800: '#2F5664', 600: '#477A8D' },
        beige: { 100: '#F5F1E9', 200: '#DED2B4' }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif']
      }
    }
  },
  plugins: [],
};
