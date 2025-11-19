const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors,
    },
  },
};

// Export colors separately for semantic tokens
module.exports.colors = colors;
