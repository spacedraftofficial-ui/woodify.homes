/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        woodify: {
          bg: "#F8F6F2",
          text: "#1B1B1B",
          burgundy: "#5C2432",
          coral: "#D64B34",
          card: "#FFFFFF",
        }
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        '2xl': '20px',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #5C2432 0%, #D64B34 100%)',
      },
      animation: {
        'scroll-indicator': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
