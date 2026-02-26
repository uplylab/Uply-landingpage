/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uply: {
          accent: {
            DEFAULT: '#00B8C9',
            hover: '#00D5E9',
          },
          text: {
            primaryLight: '#001F3C',
            primaryDark: '#EAF2F5',
            secondaryLight: '#535e69ff',
            secondaryDark: '#8ba3afff',
          },
          surface: {
            light: '#FFFFFF',
            dark: 'rgba(255,255,255,0.03)',
          },
          border: {
            light: 'rgba(0,0,0,0.08)',
            dark: 'rgba(255,255,255,0.08)',
          },
        },
      },
      boxShadow: {
        uply: '0 0 25px rgba(0,0,0,0.25)',
        glow: '0 0 20px rgba(0,184,201,0.25)',
      },
      backdropBlur: {
        glass: '24px',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
