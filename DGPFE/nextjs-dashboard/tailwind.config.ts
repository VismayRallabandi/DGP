import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  content: [
    './components/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '768px',
      md: '1280px',
      lg: '1440px',
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      white: '#FFFFFF',
      black: '#000000',
      disabled: '#91918b',
      accordionTriggerBlue: '#97e2f583',
      accordionContentLightBlue: '#97e2f518',
      blue: {
        lightest: '#CCCCFF',
        DEFAULT: '#0000FF',
        hover: '#0000CC',
      },
      gray: {
        light: '#e3e3e3',
        darkest: '#666666',
      },
      red: {
        hover: '#CC0000',
        dark: '#990000',
      },
      primary: {
        lightest: '#CCCCFF',
        DEFAULT: '#0000FF',
        hover: '#0000CC',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
        hover: 'hsl(var(--secondary-hover))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
        hover: 'hsl(var(--destructive-hover))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    fontFamily: {
      serif: 'WeWork Serif, serif',
      sans: 'Apercu Pro, sans-serif',
    },
    fontSize: {
      w46: ['46px', '52px'],
      w32: ['32px', '40px'],
      w24: ['24px', '30px'],
      w20: ['20px', '26px'],
      w18: ['18px', '24px'],
      w16: ['16px', '22px'],
      w14: ['14px', '20px'],
      a24: ['24px', '34px'],
      a20: ['20px', '30px'],
      a16: ['16px', '26px'],
      a14: ['14px', '22px'],
      a12: ['12px', '20px'],
    },
    extend: {
      height: {
        'screen-minus-header': 'calc(100vh - 75px)',
        'screen-minus-header-minus-page-title': 'calc(100vh - 138px)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.wrapper': {
          maxWidth: '100%',
          width: '100%',
          '@screen md': {
            maxWidth: '100%',
          },
        },
        '.wrapper-padding': {
          padding: '1rem',
          // padding: '2.5rem 1rem', // 40px, 16px
          // '@screen sm': {
          //   padding: '2.5rem 3rem', // 40px 48px
          // },
          // '@screen md': {
          //   padding: '3.75rem', // 60px 60px
          // },
        },
      });
    }),
  ],
} satisfies Config;

export default config;