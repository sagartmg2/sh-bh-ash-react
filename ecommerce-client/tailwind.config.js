/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens:{
      //   sm:"576px",
      //   "tab":"768px",
      // }
      colors:{
        "primary":"#7E33E0",
        "primary-dark":"#0D0E43",
        "primary-light":"#8A8FB9",
        "secondary":"#FB2E86"
      }
    },
  },
  plugins: [],
}

