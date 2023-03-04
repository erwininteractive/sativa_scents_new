const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'sativa-blue': '#02031f',
            'sativa-white': '#f7f7db',
            'sativa-purple': '#9401cc',
            'sativa-green': '#58d579',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            slate: colors.slate
        },
        extend: {}
    },
    plugins: []
}
