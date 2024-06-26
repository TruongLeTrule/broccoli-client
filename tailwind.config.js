/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#00c722',
        bgColor: '#FFFFFF',
        textColor: '#000000',
        secondaryColor: '#C1F2B0',
        highlightColor: '#D0011B',
        thirdColor: '#007336',
        fourthColor: '#E6FFDD',
        btnColor: '#FFB534',
        redDanger: '#ef4444',
        lineColor: '#D9D9D9',
      },
    },
    fontFamily: {
      dancing: ['Dancing Script'],
    },
  },
  plugins: [],
};
