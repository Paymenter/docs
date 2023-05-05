const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
        "content/**/*.md", 
        "layouts/**/*.html",
        "./node_modules/flowbite/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["roboto, sans-serif", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'gray': colors.gray,
                'secondary': {
                    50: 'var(--secondary-50)',
                    100: 'var(--secondary-100)',
                    200: 'var(--secondary-200)',
                    300: 'var(--secondary-300)',
                    400: 'var(--secondary-400)',
                    500: 'var(--secondary-500)',
                    600: 'var(--secondary-600)',
                    700: 'var(--secondary-700)',
                    800: 'var(--secondary-800)',
                    900: 'var(--secondary-900)',
                },
                'primary': {
                    50: 'var(--primary-50)',
                    100: 'var(--primary-100)',
                    200: 'var(--primary-200)',
                    300: 'var(--primary-300)',
                    400: 'var(--primary-400)',
                },
                'danger': {
                    50: 'var(--danger-50)',
                    100: 'var(--danger-100)',
                    200: 'var(--danger-200)',
                    300: 'var(--danger-300)',
                    400: 'var(--danger-400)',
                },
                'success': {
                    50: 'var(--success-50)',
                    100: 'var(--success-100)',
                    200: 'var(--success-200)',
                    300: 'var(--success-300)',
                    400: 'var(--success-400)',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('flowbite/plugin'), require('autoprefixer')],
};