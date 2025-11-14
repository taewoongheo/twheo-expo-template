import tailwindConfigCustom from 'tailwind-config-custom';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindConfigCustom],
  theme: {
    extend: {},
  },
  plugins: [],
};
