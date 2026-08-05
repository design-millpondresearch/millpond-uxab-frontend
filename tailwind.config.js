/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F4E79',
        'primary-alt': '#567C8D',
        sky: '#C8D9E6',
        sand: '#F5EFE7',
        surface: '#FBFAF8',
        slate: '#4B4B4B',
        'dark-bg': '#0a1628',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1' }],
        h2: ['40px', { lineHeight: '1.2' }],
        h3: ['28px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        caption: ['14px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        card: '16px',
        button: '8px',
        pill: '9999px',
      },
      spacing: {
        'navbar': '80px',
      },
    },
  },
  plugins: [],
};