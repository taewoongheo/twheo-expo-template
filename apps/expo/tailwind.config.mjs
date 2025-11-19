import tailwindDesignTokens from '@twheo/tailwind-design-tokens';
import tailwindSemanticTokens from '@twheo/tailwind-semantic-tokens';
import nativewindPreset from 'nativewind/preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [nativewindPreset, tailwindDesignTokens, tailwindSemanticTokens],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
