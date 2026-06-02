/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        viaoda: ['"Viaoda Libre"', 'serif'],
        imprima: ['"Imprima"', 'sans-serif']
      }
    }
  },
  plugins: []
};
