/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fusion: {
          bg: '#000000',
          panel: '#0D0D0D',
          card: '#111111',
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          orange: '#F97316',
          'orange-dark': '#EA580C',
        },
        neuro: {
          900: '#000000',
          800: '#0D0D0D',
          700: '#1A1A1A',
          primary: '#3B82F6',
          secondary: '#F97316',
          accent: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3B82F655 0deg, #60A5FA55 180deg, #3B82F655 360deg)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'beam-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'beam-pulse': 'beam-pulse 4s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        typing: 'typing 1s step-end infinite',
      }
    },
  },
  plugins: [],
}