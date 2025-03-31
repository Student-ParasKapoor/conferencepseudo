/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Fixed typo: added ** to include all subdirectories
  theme: {
    extend: {
      animation: {
        // Existing animation
        blob: "blob 7s infinite",
        // New animations
        'fade-in': 'fadeIn 0.6s ease-in',
        'fade-in-down': 'fadeInDown 0.6s ease-in',
        'fade-in-left': 'fadeInLeft 0.6s ease-in',
        'fade-in-right': 'fadeInRight 0.6s ease-in',
        'fade-in-up': 'fadeInUp 0.6s ease-in',
      },
      keyframes: {
        // Existing keyframes
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        // New keyframes
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

