/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      restrauntName: '#FF0000',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

