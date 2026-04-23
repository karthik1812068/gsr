/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        pageBg: '#F4F1EC',
        accentBeige: '#CDA87A',
        accentBeigeHover: '#BC9466',
        textPrimaryWhite: '#F7F3EE',
        cardBg: '#EEE7DB',
        textDark: '#2B2118',
        textMutedBrown: '#7B6753',
      },
    },
  },
  plugins: [],
}

