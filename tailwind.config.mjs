/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          glow: 'rgba(16,185,129,0.15)',
        },
      },
      screens: {
        xs: '475px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,158,11,0.18) 0%, transparent 70%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        'dot-pattern': 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '32px 32px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
