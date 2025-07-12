/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': {
          DEFAULT: '#1e293b', // Deep professional authority - slate-800
          50: '#f8fafc', // Clean content canvas - slate-50
          100: '#f1f5f9', // Subtle content elevation - slate-100
          200: '#e2e8f0', // Border definition - slate-200
          300: '#cbd5e1', // Subtle separation - slate-300
          400: '#94a3b8', // Muted elements - slate-400
          500: '#64748b', // Clear hierarchy support - slate-500
          600: '#475569', // Sophisticated supporting context - slate-600
          700: '#334155', // Strong hierarchy - slate-700
          800: '#1e293b', // Deep professional authority - slate-800
          900: '#0f172a', // Extended reading comfort - slate-900
        },
        // Secondary Colors
        'secondary': {
          DEFAULT: '#475569', // Sophisticated supporting context - slate-600
          50: '#f8fafc', // Light secondary background - slate-50
          100: '#f1f5f9', // Secondary surface - slate-100
          500: '#64748b', // Secondary text - slate-500
          600: '#475569', // Secondary elements - slate-600
          700: '#334155', // Secondary emphasis - slate-700
        },
        // Accent Colors
        'accent': {
          DEFAULT: '#0ea5e9', // Strategic attention direction - sky-500
          50: '#f0f9ff', // Light accent background - sky-50
          100: '#e0f2fe', // Accent surface - sky-100
          200: '#bae6fd', // Light accent - sky-200
          300: '#7dd3fc', // Medium light accent - sky-300
          400: '#38bdf8', // Medium accent - sky-400
          500: '#0ea5e9', // Primary accent - sky-500
          600: '#0284c7', // Dark accent - sky-600
          700: '#0369a1', // Darker accent - sky-700
        },
        // Background Colors
        'background': '#f8fafc', // Clean content canvas - slate-50
        'surface': '#f1f5f9', // Subtle content elevation - slate-100
        'surface-hover': '#e2e8f0', // Interactive surface - slate-200
        // Text Colors
        'text-primary': '#0f172a', // Extended reading comfort - slate-900
        'text-secondary': '#64748b', // Clear hierarchy support - slate-500
        'text-muted': '#94a3b8', // Subtle text - slate-400
        // Status Colors
        'success': {
          DEFAULT: '#10b981', // Positive outcome reinforcement - emerald-500
          50: '#ecfdf5', // Light success background - emerald-50
          100: '#d1fae5', // Success surface - emerald-100
          500: '#10b981', // Success primary - emerald-500
          600: '#059669', // Success hover - emerald-600
          700: '#047857', // Success active - emerald-700
        },
        'warning': {
          DEFAULT: '#f59e0b', // Important attention without alarm - amber-500
          50: '#fffbeb', // Light warning background - amber-50
          100: '#fef3c7', // Warning surface - amber-100
          500: '#f59e0b', // Warning primary - amber-500
          600: '#d97706', // Warning hover - amber-600
        },
        'error': {
          DEFAULT: '#ef4444', // Helpful problem identification - red-500
          50: '#fef2f2', // Light error background - red-50
          100: '#fee2e2', // Error surface - red-100
          500: '#ef4444', // Error primary - red-500
          600: '#dc2626', // Error hover - red-600
        },
        // Trust Builder
        'trust': {
          DEFAULT: '#3b82f6', // Confident blue for credibility - blue-500
          50: '#eff6ff', // Light trust background - blue-50
          100: '#dbeafe', // Trust surface - blue-100
          500: '#3b82f6', // Trust primary - blue-500
          600: '#2563eb', // Trust hover - blue-600
        },
        // Conversion Colors
        'conversion': '#10b981', // Conversion accent - emerald-500
        'conversion-hover': '#059669', // Conversion hover - emerald-600
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}