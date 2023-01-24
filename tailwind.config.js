/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};