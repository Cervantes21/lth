/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define los archivos que Tailwind CSS debe escanear para generar las clases
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Archivos dentro del directorio 'pages'
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Archivos dentro del directorio 'components'
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Archivos dentro del directorio 'app'
    "./public/**/*.html" // Archivos HTML estáticos
  ],
  theme: {
    extend: {
      // Agrega fondos gradientes personalizados
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
