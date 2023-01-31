/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creamy: "rgb(235 224 208)",
        beige: "rgb(244 239 235)",
        sand: "#D3C6AD",
        charcoal: "rgb(33, 31, 28)",
      },
    },
  },
  plugins: [],
};
