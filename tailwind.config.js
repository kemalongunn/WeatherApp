/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#121063', 
        'pageBackground': '#eceff1',
        'backButon': '#ee4e34'  
      }
    },
   
  },
  plugins: [],
};
