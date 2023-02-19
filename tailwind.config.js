/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainOverlay: 'rgba(89, 89, 89, 0.4)',
        mainGreen: '#4ECF20',
        mainOrange: 'rgb(253,187,45)',
      },
    },
  },
  plugins: [],
};
