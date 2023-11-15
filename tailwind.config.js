/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    colors:{
      'gray-normal': '#667085',
      'gray-semibold': '#98A2B3',
      'gray-bold': '#1D2939',
      'button-blue':'#175CD3',
      'text-blue': '#101828'
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
});

