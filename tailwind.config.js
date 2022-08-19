/** @type {import('tailwindcss').Config} */

const tailwindcssRTL = require('tailwindcss-rtl');
const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './app/**/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [tailwindcssForms, tailwindcssRTL],
};
