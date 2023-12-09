import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js'
  ],
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
        scroll: 'scroll 5s linear infinite',
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
export default config
