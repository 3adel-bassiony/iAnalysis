/** @type {import('tailwindcss').Config} */

const tailwindcssRTL = require('tailwindcss-rtl');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [tailwindcssRTL],
    darkMode: 'class',
};
