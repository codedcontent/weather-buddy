/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#181620",
        boardColor: "#252836",
        secondary: "#226FEE",
        primary: "#525298",
        "success-green": "#5ADD0A",
        "danger-red": "#FF0302",
      },
      fontFamily: {
        sans: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
