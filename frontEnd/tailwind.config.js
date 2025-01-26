const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Arvo"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
