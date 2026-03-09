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
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'beam-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        'float-slow2': {
          '0%, 100%': { transform: 'translateY(0px) rotate(1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-1deg)' },
        },
        typing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.2)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'word-up': {
          from: { opacity: '0', transform: 'translateY(28px)', filter: 'blur(4px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'border-spin': {
          '100%': { '--angle': '360deg' },
        },
      },
      animation: {
        scroll: 'scroll 32s linear infinite',
        'scroll-reverse': 'scroll-reverse 28s linear infinite',
        'beam-pulse': 'beam-pulse 4s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slow2': 'float-slow2 10s ease-in-out infinite 1.5s',
        typing: 'typing 1s step-end infinite',
        shimmer: 'shimmer 5s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'word-up': 'word-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      }
    },
  },
  plugins: [],
}