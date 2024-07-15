// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: "#E6BC43",
        inpArea: "#847F6D",
      },
    },
    screens: {
      sm: "426px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
