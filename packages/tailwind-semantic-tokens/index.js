import colors from '@twheo/tailwind-design-tokens/colors';

// NOTE: Cache must be cleared if any color token values are modified
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          'primary-light': colors.primary[300],
          'primary-dark': colors.primary[700],
          'secondary-light': colors.primary[200],
          'secondary-dark': colors.primary[800],
        },
        background: {
          'primary-light': colors.primary[300],
          'primary-dark': colors.primary[700],
          'secondary-light': colors.primary[200],
          'secondary-dark': colors.primary[800],
          'destructive-light': colors.danger[500],
          'destructive-dark': colors.danger[400],
        },
        text: {
          'primary-light': colors.neutral[800],
          'primary-dark': colors.neutral[200],
          'secondary-light': colors.neutral[600],
          'secondary-dark': colors.neutral[400],
        },
        border: {
          'primary-light': colors.charcoal[300],
          'primary-dark': colors.charcoal[700],
          'secondary-light': colors.charcoal[200],
          'secondary-dark': colors.charcoal[800],
          'destructive-light': colors.danger[300],
          'destructive-dark': colors.danger[500],
        },
      },
    },
  },
};
