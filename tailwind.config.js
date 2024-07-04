/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { opacity: 0, transform: 'translateX(125px)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'image-in': {
          '0%': { transform: 'translateX(-25px)' },
          '100%': { transform: 'translateX(0)' },
        },
        content: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
        'image-in': 'image-in 1.25s ease-out forwards',
        content: 'content 1s forwards',
      },
    },
  },
  plugins: [],
}