/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#1F2937',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'button-glow': 'button-glow 2s ease-in-out infinite',
        'button-glow-gray': 'button-glow-gray 2s ease-in-out infinite',
        'star': 'star 30s linear infinite',
        'button-glow-blue': 'button-glow-blue 2s ease-in-out infinite',
        'title-shake': 'title-shake 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      textShadow: {
        'blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
      },
      keyframes: {
        star: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-100vh)' }
        },
        glow: {
          '0%, 100%': {
            'text-shadow': '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)'
          },
          '50%': {
            'text-shadow': '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)'
          }
        },
        'glow-pulse': {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'button-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.3), 0 0 45px rgba(59,130,246,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.3), 0 0 90px rgba(59,130,246,0.1)'
          }
        },
        'button-glow-gray': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(31,41,55,0.5), 0 0 30px rgba(31,41,55,0.3), 0 0 45px rgba(31,41,55,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(31,41,55,0.5), 0 0 60px rgba(31,41,55,0.3), 0 0 90px rgba(31,41,55,0.1)'
          }
        },
        'button-glow-blue': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)'
          }
        },
        'title-shake': {
          '0%, 75%, 100%': {
            transform: 'translateX(0)',
            filter: 'blur(0)',
          },
          // Fast shake sequence
          '76%': {
            transform: 'translateX(-4px) translateY(2px)',
            filter: 'blur(1px)',
          },
          '77%': {
            transform: 'translateX(5px) translateY(-3px)',
            filter: 'blur(2px)',
          },
          '78%': {
            transform: 'translateX(-5px) translateY(1px)',
            filter: 'blur(2px)',
          },
          '79%': {
            transform: 'translateX(4px) translateY(-2px)',
            filter: 'blur(2px)',
          },
          '80%': {
            transform: 'translateX(-6px) translateY(3px)',
            filter: 'blur(3px)',
          },
          '81%': {
            transform: 'translateX(6px) translateY(-3px)',
            filter: 'blur(3px)',
          },
          '82%': {
            transform: 'translateX(-4px) translateY(2px)',
            filter: 'blur(2px)',
          },
          '83%': {
            transform: 'translateX(5px) translateY(-2px)',
            filter: 'blur(2px)',
          },
          '84%': {
            transform: 'translateX(-3px) translateY(1px)',
            filter: 'blur(1px)',
          },
          '85%': {
            transform: 'translateX(2px) translateY(-1px)',
            filter: 'blur(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-blue': {
          'text-shadow': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        },
        '.text-shadow-cyan': {
          'text-shadow': '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        },
      });
    },
  ],
} 