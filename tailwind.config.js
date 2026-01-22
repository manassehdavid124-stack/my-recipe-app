module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // your app folder
    "./components/**/*.{js,ts,jsx,tsx}", // components
    "./src/**/*.{js,ts,jsx,tsx,html}",   // if you still use src folder
    "./pages/**/*.{js,ts,jsx,tsx}",      // optional if you have pages folder
  ],
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
