/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '100%': { backgroundPosition: '15% 50%' },
        },
      },
      animation: {
        rotate: 'rotate 6s infinite alternate linear',
      },
      backgroundImage: {
        'background': 'url("./src/assets/background.svg")',
      },
      backgroundColor: {
        'background-card': 'rgba(24, 21, 36, 0.66)', // Warna latar kartu dengan transparansi
        'detail-card' : '#6939ff'
      },
      colors: {
        'primary': '#7656f0',
        'color-card': 'rgb(255 255 255 / 38%)'
      },
      boxShadow: {
        'card': '0 60px 40px rgb(0 0 0 / 8%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

