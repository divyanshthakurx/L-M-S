/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: { 
    extend: {
      animation: {
        'ping-slow': 'ping 2s infinite',
      },
      backgroundImage: {
        'hero-pattern': "ur')",
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
      },
      colors: {
        'custom-dark-teal': 'rgba(0, 79, 79, 0.9)',
        'custom-light-teal': 'rgba(10, 67, 61, 0.7)',
        'custom-light-gray': 'rgba(240, 245, 245, 0.5)',
      },
      fontFamily: {
        'outfit': 'Outfit, serif, sans-serif',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}