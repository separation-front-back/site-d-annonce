/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/**/*.pug'],
    theme: {
        extend: {
            colors: {
                orange: '#FF7E1B',
                black: '#1D2026',
                gray: '#69707D',
            },
            fontFamily: {
                kumbh: ['Kumbh Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
