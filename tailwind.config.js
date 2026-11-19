/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./package/**/*.{html,js}",
    "./destination/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./js/**/*.{html,js}",
    "./data/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#071A2B",      // Primary - Deep Navy
          dark: "#051320",      // Extra deep for overlays
          blue: "#123B5D",      // Secondary - Travel Blue
          orange: "#F59E0B",    // Accent - Warm Orange (Primary CTA & 24/7)
          orangeHover: "#D97706",
          bg: "#F8FAFC",        // Light section background
          surface: "#FFFFFF",   // Cards
          text: "#0F172A",      // Primary Text
          muted: "#64748B",     // Secondary Text
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(7, 26, 43, 0.05)',
        'elevated': '0 12px 32px -4px rgba(7, 26, 43, 0.12)',
        'glow-orange': '0 0 25px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
}
