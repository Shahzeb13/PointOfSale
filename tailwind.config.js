/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          card: 'var(--brand-card)',
          border: 'var(--brand-border)',
          text: {
            primary: 'var(--brand-text-primary)',
            secondary: 'var(--brand-text-secondary)',
            muted: 'var(--brand-text-muted)',
          },
          primary: 'var(--color-primary-500)',
          secondary: 'var(--color-secondary-500)',
        },
        accent: {
          success: "#39C56B",
          warning: "#F5B948",
          cyan: "#4DD8E8",
          orange: "#FFB547",
          pink: "#F8C8D8",
          mint: "#CFF7EE",
          lavender: "#E8DFFF"
        }
      },
      borderRadius: {
        'page': 'var(--radius-page)',
        'card': 'var(--radius-card)',
        'button': 'var(--radius-button)',
        'input': 'var(--radius-input)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px'
      },
      gap: {
        '5': '20px',
        '6': '24px',
      },
      boxShadow: {
        'brand-pop': '0 25px 50px -12px rgba(0,0,0,0.3), 0 8px 20px -8px rgba(214,244,74,0.15), 0 -4px 20px -8px rgba(162,134,255,0.1)',
        'premium-sm': 'var(--shadow-premium-sm)',
        'premium-md': 'var(--shadow-premium-md)',
        'premium-lg': 'var(--shadow-premium-lg)',
      }
    },
  },
  plugins: [],
}
