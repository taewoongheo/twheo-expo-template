import tailwindDesignTokens from '@twheo/tailwind-design-tokens';
import tailwindSemanticTokens from '@twheo/tailwind-semantic-tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindDesignTokens, tailwindSemanticTokens],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
