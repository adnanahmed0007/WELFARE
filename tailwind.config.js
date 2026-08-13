/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#163C2C",
          deep: "#0C271B",
          light: "#2B5B44",
        },
        mosque: {
          DEFAULT: "#1C6FBD",
          light: "#3E8AD1",
        },
        gold: {
          DEFAULT: "#C6992C",
          light: "#E0B94F",
          deep: "#9C7620",
        },
        ivory: "#FAF5E8",
        paper: "#F4EEDC",
        ink: "#211C13",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
        urdu: ["'Noto Nastaliq Urdu'", "serif"],
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(12, 39, 27, 0.25)",
        gold: "0 10px 25px -8px rgba(198, 153, 44, 0.45)",
      },
      backgroundImage: {
        "arch-pattern": "radial-gradient(circle at 1px 1px, rgba(198,153,44,0.35) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
