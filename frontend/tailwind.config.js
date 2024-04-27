/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3e4e8',  // Muy claro
          100: '#cacdd3', // Más claro
          200: '#aeb1be', // Claro
          300: '#9296a9', // Semibrillante
          400: '#767a94', // Medio
          500: '#2c2f38', // Color base que proporcionaste
          600: '#252830', // Oscuro
          700: '#1d2027', // Más oscuro
          800: '#16181f', // Aún más oscuro
          900: '#0f1016'  // Muy oscuro
        }
      }
    },
  },
  plugins: [],
}