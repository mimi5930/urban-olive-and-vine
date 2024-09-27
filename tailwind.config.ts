import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'logo-green': {
          '50': '#f8fee8',
          '100': '#edffc2',
          '200': '#dfff89',
          '300': '#d5ff45',
          '400': '#d1fc13',
          '500': '#cbec06',
          '600': '#bfcc02',
          '700': '#b1ad06',
          '800': '#867c0d',
          '900': '#726411',
          '950': '#433805',
          DEFAULT: '#b1ad06'
        },
        'logo-brown': {
          '50': '#fffee6',
          '100': '#fffebd',
          '200': '#fff97e',
          '300': '#ffed35',
          '400': '#ffdb00',
          '500': '#ffc000',
          '600': '#de9200',
          '700': '#b06600',
          '800': '#914e02',
          '900': '#7a3f09',
          '950': '#572600',
          DEFAULT: '#572600'
        },
        'reseda-green': {
          '50': '#f5f3f0',
          '100': '#e9e5de',
          '200': '#d6d1c0',
          '300': '#bcb49a',
          '400': '#a39978',
          '500': '#8c835f',
          '600': '#6a6446',
          '700': '#524e39',
          '800': '#444130',
          '900': '#3b392c',
          '950': '#1e1d15',
          DEFAULT: '#8c835f'
        },
        eggshell: {
          '50': '#faf3dd',
          '100': '#f8edc9',
          '200': '#f3da95',
          '300': '#ecbe58',
          '400': '#e4a32b',
          '500': '#d58c1d',
          '600': '#b76b17',
          '700': '#924c16',
          '800': '#7a3d19',
          '900': '#68331b',
          '950': '#3c1a0c',
          DEFAULT: '#faf3dd'
        },
        feldgrau: {
          '50': '#f5f8f5',
          '100': '#dfe8e1',
          '200': '#bed1c2',
          '300': '#96b29e',
          '400': '#70917a',
          '500': '#567660',
          '600': '#435e4b',
          '700': '#3a4f41',
          '800': '#303f35',
          '900': '#2b3630',
          '950': '#151e19',
          DEFAULT: '#3a4f41'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: [
          'Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"'
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
