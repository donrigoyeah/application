/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      whiteSpace: ['hover'],
      whitespace: ['hover'],
    }
  },
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#F1DBBF',
        secondary: '#B99B6B',
        third: '#698269',
        fourth: '#AA5656',
        proGreen: '#31ab2a',
        proBlack: '#694338'
      },
      boxShadow: {
        right: 'inset -20px 0px 10px -10px rgba(0,0,0,0.5)',
        left: 'inset 20px 0px 10px -10px rgba(0,0,0,0.5)',
        inner: ' inset 0 10px 20px 0 rgba(0,0,0,0.5)'
      },
    },
  },
  plugins: [],
};
