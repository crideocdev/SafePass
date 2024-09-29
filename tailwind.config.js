/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Agrega tu color personalizado aquí
        customColor: {
          100: '#022F40',
          200: '#FF810A',
          300: '#F7F7FF',
          400: '#183446',
          500: '#046E8F', 
        },
    },
  },
  plugins: [],
}
}

