/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset'), require('tailwind-config-custom')],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
