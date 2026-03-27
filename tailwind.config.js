/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand Palette ───────────────────────── */
        brand: {
          red:    '#C62828',   /* primary action  */
          'red-deep': '#8B0000', /* dark red hover  */
          'red-soft': '#EF5350', /* light red glow  */
          white:  '#FFFFFF',
          cream:  '#FAFAF7',   /* off-white bg    */
          smoke:  '#F5F3EE',   /* section alt bg  */
          black:  '#0A0A0A',
          ink:    '#1A1009',   /* rich near-black */
          muted:  '#7C6B5E',   /* body text muted */
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Palatino Linotype', 'serif'],
        mono:  ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'marquee':      'marquee 30s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up':      'fadeUp 0.6s ease forwards',
        'spin-slow':    'spin 12s linear infinite',
      },
      keyframes: {
        marquee:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      backdropBlur: { xl: '24px' },
    },
  },
  plugins: [],
};

module.exports = config;