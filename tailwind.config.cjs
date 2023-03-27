/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
