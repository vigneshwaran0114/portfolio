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
        'primary': '#1a1a2e', // Deep navy (primary) - slate-900
        'primary-50': '#f8fafc', // Light slate (50-level shade) - slate-50
        'primary-100': '#f1f5f9', // Light slate (100-level shade) - slate-100
        'primary-200': '#e2e8f0', // Light slate (200-level shade) - slate-200
        'primary-500': '#64748b', // Medium slate (500-level shade) - slate-500
        'primary-600': '#475569', // Medium slate (600-level shade) - slate-600
        'primary-700': '#334155', // Dark slate (700-level shade) - slate-700
        'primary-800': '#1e293b', // Dark slate (800-level shade) - slate-800
        'primary-900': '#0f172a', // Darkest slate (900-level shade) - slate-900

        // Secondary Colors
        'secondary': '#16213e', // Electric blue secondary - blue-900
        'secondary-50': '#eff6ff', // Light blue (50-level shade) - blue-50
        'secondary-100': '#dbeafe', // Light blue (100-level shade) - blue-100
        'secondary-200': '#bfdbfe', // Light blue (200-level shade) - blue-200
        'secondary-500': '#3b82f6', // Medium blue (500-level shade) - blue-500
        'secondary-600': '#2563eb', // Medium blue (600-level shade) - blue-600
        'secondary-700': '#1d4ed8', // Dark blue (700-level shade) - blue-700
        'secondary-800': '#1e40af', // Dark blue (800-level shade) - blue-800

        // Accent Colors
        'accent': '#e94560', // Vibrant orange accent - red-500
        'accent-50': '#fef2f2', // Light red (50-level shade) - red-50
        'accent-100': '#fee2e2', // Light red (100-level shade) - red-100
        'accent-200': '#fecaca', // Light red (200-level shade) - red-200
        'accent-500': '#ef4444', // Medium red (500-level shade) - red-500
        'accent-600': '#dc2626', // Medium red (600-level shade) - red-600
        'accent-700': '#b91c1c', // Dark red (700-level shade) - red-700

        // Background Colors
        'background': '#fafafa', // Clean canvas background - gray-50
        'surface': '#ffffff', // Elevated content surface - white

        // Text Colors
        'text-primary': '#2d3748', // Comfortable reading contrast - gray-700
        'text-secondary': '#718096', // Clear hierarchy text - gray-500

        // Status Colors
        'success': '#48bb78', // Positive feedback - green-500
        'success-50': '#f0fff4', // Light green (50-level shade) - green-50
        'success-100': '#c6f6d5', // Light green (100-level shade) - green-100
        'success-500': '#38a169', // Medium green (500-level shade) - green-500

        'warning': '#ed8936', // Attention without alarm - orange-500
        'warning-50': '#fffaf0', // Light orange (50-level shade) - orange-50
        'warning-100': '#feebc8', // Light orange (100-level shade) - orange-100
        'warning-500': '#dd6b20', // Medium orange (500-level shade) - orange-500

        'error': '#f56565', // Helpful problem identification - red-400
        'error-50': '#fed7d7', // Light red (50-level shade) - red-100
        'error-100': '#feb2b2', // Light red (100-level shade) - red-200
        'error-500': '#e53e3e', // Medium red (500-level shade) - red-500
      },
      fontFamily: {
        'headline': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
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
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
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
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'breathing': 'breathing 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-5px,0)' },
          '70%': { transform: 'translate3d(0,-3px,0)' },
          '90%': { transform: 'translate3d(0,-1px,0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '600': '600ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}