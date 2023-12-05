/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
      boxShadow: {
        customShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 25px 0px;',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
