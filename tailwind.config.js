// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "p-gray": "#eaeef7",
        "p-nav-blue": "#0112fd",
        "p-gray-box": "#f9f9f9",
        "p-orange": "#f0ab7a",
      },
    },
    fontFamily: {
      vazir: ["vazir"],
      sahel: ["sahel"],
      play: ["play"],
      roboto: ["roboto"],
      sora: ["sora"],
      sans: ["sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
