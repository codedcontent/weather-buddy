/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-poppins)",
      },
      colors: {
        "wb-bgColor": "#181620",
        "wb-boardColor": "#252836",
        "wb-secondary": "#34B3F1",
        "wb-primary": "#525298",
        "wb-success-green": "#5ADD0A",
        "wb-danger-red": "#FF0302",
        "wb-silver": "#363846",
      },
    },
  },
  plugins: [],
};
