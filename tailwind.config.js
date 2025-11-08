const colors = require('./src/styles/colors');
const semantics = require('./src/styles/semantics');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      semantics,
    },
  },
  plugins: [],
};
