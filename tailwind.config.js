// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // <- make sure this matches your project
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
