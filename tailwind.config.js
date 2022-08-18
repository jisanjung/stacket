/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#BCEBCB",
        "custom-light-green": "#F7FFF6",
      }
    },
  },
  plugins: [],
}
