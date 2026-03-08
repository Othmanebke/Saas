/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          900: '#060B19',
          800: '#0F172A',
          700: '#1E293B',
          primary: '#00F0FF',
          secondary: '#7000FF',
          accent: '#00FF9D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #7000FF55 0deg, #00F0FF55 180deg, #7000FF55 360deg)',
      }
    },
  },
  plugins: [],
}