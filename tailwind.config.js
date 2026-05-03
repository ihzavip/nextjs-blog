/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060504",
          light: "#0a0908",
          mid: "#100e0c",
        },
        parchment: {
          DEFAULT: "#e0d5c8",
          muted: "#8a7d71",
          faint: "#3f3830",
        },
        gold: "#c9a96e",
        divider: "#252220",
        // legacy — used by design.jsx
        creamy: "rgb(235 224 208)",
        beige: "rgb(244 239 235)",
        sand: "#D3C6AD",
        charcoal: "rgb(33, 31, 28)",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
