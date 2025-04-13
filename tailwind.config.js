/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "Open-Sans": ["Open Sans", "sans-serif"],
        "Poppins" : ["Poppins", "sans-serif"],
        "Roboto": ["Roboto", "sans-serif"]
        
      }
    },
  },
  plugins: [],
}