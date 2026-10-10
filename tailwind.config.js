/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04130b',
          900: '#082315',
          800: '#0e3a24',
          700: '#145334',
          600: '#1b6d45',
          500: '#228957',
        },
        lime: {
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
        },
        charcoal: {
          950: '#070a08',
          900: '#0f1713',
          850: '#141f1a',
          800: '#192721',
          700: '#24372e',
          600: '#344e42',
          500: '#486859',
          400: '#6f8d7f',
          300: '#9cb3a8',
          200: '#c8d6cf',
          100: '#eef3f0',
        },
        eco: {
          primary: '#16a34a',
          accent: '#22c55e',
          bright: '#4ade80',
          lime: '#84cc16',
          dark: '#0a1d13',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(74, 222, 128, 0.6))' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
