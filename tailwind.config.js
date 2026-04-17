/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-2': 'rgb(var(--color-bg-2) / <alpha-value>)',
        'bg-3': 'rgb(var(--color-bg-3) / <alpha-value>)',
        'bg-4': 'rgb(var(--color-bg-4) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        'fg-2': 'rgb(var(--color-fg-2) / <alpha-value>)',
        'fg-3': 'rgb(var(--color-fg-3) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-2': 'rgb(var(--color-accent-2) / <alpha-value>)',
        'accent-3': 'rgb(var(--color-accent-3) / <alpha-value>)',
      },
      animation: {
        'pulse-custom': 'pulse-custom 2s infinite',
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 7s ease-in-out infinite',
        'float-3': 'float-3 8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
      },
      keyframes: {
        'pulse-custom': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(124,111,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(232,255,71,0.06) 0%, transparent 50%)',
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'gradient-purple': 'radial-gradient(circle at 0% 100%, rgba(124,111,255,0.1), transparent 60%)',
        'gradient-red': 'radial-gradient(circle at 0% 100%, rgba(255,107,107,0.1), transparent 60%)',
        'gradient-yellow': 'radial-gradient(circle at 0% 100%, rgba(232,255,71,0.08), transparent 60%)',
        'gradient-teal': 'radial-gradient(circle at 0% 100%, rgba(29,158,117,0.1), transparent 60%)',
        'newsletter-gradient': 'linear-gradient(135deg, rgba(124,111,255,0.1) 0%, rgba(10,10,15,1) 100%)',
      },
      boxShadow: {
        'button': '0 0 40px rgba(232,255,71,0.2)',
        'button-hover': '0 8px 50px rgba(232,255,71,0.35)',
        'form-submit': '0 0 30px rgba(232,255,71,0.15)',
      },
      backgroundColor: {
        'code-block': '#0d0d14',
      },
      backgroundSize: {
        'hero-grid': '60px 60px',
      },
      maskImage: {
        'radial': 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 75%)',
      },
    },
  },
  plugins: [],
}
