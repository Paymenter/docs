module.exports = {
  content: [
    "content/**/*.md", "layouts/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',

  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin'), require('autoprefixer')],
};