// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: "#F38181",
      yellow: "#FCE38A",
      blue: "#95E1D3",
      background: "#f2f2f2",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#b2b9c1"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
