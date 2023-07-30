/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backg: "#121B22",
        nav: "#1F2C34",
        "nav-font": "#DFE7EA",
        "blue-react": "#61DAFB",
      },
      fontFamily: {
        Fira: "Fira",
        Salt: "Salt",
        Quote: "Quote",
      },
    },
  },
  plugins: [],
};
