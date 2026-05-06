/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"Cascadia Code"', '"JetBrains Mono Variable"', '"Courier New"', 'monospace'],
      },
      colors: {
        /* True black and white monochrome - pure contrast */
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          150: '#e8e8e8',
          200: '#d0d0d0',
          300: '#b0b0b0',
          400: '#808080',
          500: '#666666',
          600: '#444444',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#000000',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        stroke: 'strokeDash 2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-8px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        strokeDash: {
          '0%, 100%': {
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dashoffset': '10',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
