/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2d78',
          purple: '#b94fff',
          orange: '#ff6b2b',
          blue: '#00d4ff',
        },
        dark: {
          900: '#05030f',
          800: '#0a0520',
          700: '#110830',
        }
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        display: ['Pacifico', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #ff2d78, 0 0 40px #ff2d78, 0 0 80px #ff2d78' },
          '50%': { boxShadow: '0 0 10px #ff2d78, 0 0 20px #ff2d78, 0 0 40px #ff2d78' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}