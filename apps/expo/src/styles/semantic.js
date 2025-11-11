// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('./colors');

module.exports = {
  brand: {
    'primary-light': colors.primary[200],
    'primary-dark': colors.primary[800],
  },
  background: {
    'primary-light': colors.charcoal[200],
    'primary-dark': colors.charcoal[800],
    'secondary-light': colors.charcoal[300],
    'secondary-dark': colors.charcoal[700],
    'destructive-light': colors.danger[400],
    'destructive-dark': colors.danger[600],
  },
  text: {
    'primary-light': colors.neutral[800],
    'primary-dark': colors.neutral[200],
  },
  destructive: {
    'primary-light': colors.danger[200],
    'primary-dark': colors.danger[800],
  },
  border: {
    'primary-light': colors.charcoal[300],
    'primary-dark': colors.charcoal[700],
    'secondary-light': colors.charcoal[200],
    'secondary-dark': colors.charcoal[800],
    'destructive-light': colors.danger[300],
    'destructive-dark': colors.danger[500],
  },
};
