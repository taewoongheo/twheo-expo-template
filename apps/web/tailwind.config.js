import tailwindDesignTokens from 'tailwind-design-tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindDesignTokens],
  theme: {
    extend: {},
  },
  plugins: [],
};
