/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan path file ini sesuai dengan struktur proyek Anda
    "./public/index.html", // Jika menggunakan Vite
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Pastikan Anda telah mengimpor font ini
      },
    },
  },
  plugins: [],
};
