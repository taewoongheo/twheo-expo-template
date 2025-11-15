/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [
    require('nativewind/preset'),
    require('@twheo/tailwind-design-tokens'),
    require('@twheo/tailwind-semantic-tokens'),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
