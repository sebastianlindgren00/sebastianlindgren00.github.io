/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ggray': '#d6d4d1',
        'gblue': '#3a7b83',
        'midnight-blue': '#1B1F3B',
        'deep-teal': '#2C3E50',
        'electric-blue': '#007BFF',
        'sky-blue': '#56CCF2',
        'soft-white': '#F5F5F5',
        'light-gray': '#D3D3D3'
      }
    },
  },
  plugins: [],
}

