/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    colors:{
      'gray-normal': '#667085',
      'gray-semibold': '#98A2B3',
      'gray-bold': '#101828',
      'button-blue':'#175CD3',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

