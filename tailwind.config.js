const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'blue-white': ['#00A4FF', '#FFFFFF'],
        'blue-f-purple-3': ['#00A4FF', '#2E2C9B'],
      },
      background: {
        'dark': '#111111',
        'f-purple-1':'#130248',
      },
      border: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    colors: {
      ...defaultTheme.colors,
      
      'f-purple-1': '#130248',
      'f-purple-2': '#3A1F81',
      'f-purple-3': '#2E2C9B',

      'f-blue-1': '#00A4FF',

      'f-green-foam': '#D6FCFE',
    },
    fill: {
      'transparent': 'RGBA(0, 0, 0, 0.0)',
      'f-purple-1': '#130248',
      'f-blue-1': '#00A4FF',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      ...defaultTheme.fontSize,
      hero: [
        '48px',
        {
            letterSpacing: '-0.02em;',
            lineHeight: '96px',
            fontWeight: 700
        }
      ],
      h1: [
        '36px',
        {
            letterSpacing: '-0.02em;',
            lineHeight: '36px',
            fontWeight: 700
        }
      ],
      h2: [
        '30px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '36px',
            fontWeight: 700
        }
      ],
      h3: [
        '28px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '30px',
            fontWeight: 700
        }
      ],
      h4: [
        '24px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '28px',
            fontWeight: 700
        }
      ],
      h5: [
        '24px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '28px',
            fontWeight: 500
        }
      ],
      body: [
        '18px',
        {
            letterSpacing: '-0.01em;',
            lineHeight: '26px'
        }
      ],
      caption: [
        '16px',
        {
            lineHeight: '24px'
        }
      ],
      caption2: [
        '14px',
        {
            lineHeight: '20px'
        }
      ]
    },
    extend: {
      backgroundImage: theme => ({
        ...defaultTheme.backgroundImage,
      }),
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        none: '0',
        px: '1px',
        sm: '0.313rem',
        DEFAULT: '0.625rem'
      },
      textColor: {
        ...defaultTheme.textColor,
        'low-emphasis': '#575757',
        primary: '#BFBFBF',
        secondary: '#7F7F7F',
        'high-emphasis': '#E3E3E3'
      },
      backgroundColor: {
        ...defaultTheme.backgroundColor,
        input: '#130248'
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        'purple-3-glow': '0px 0px 180px 80px RGBA(44, 48, 149, 0.20)',
        'green-foam-glow': '0px 0px 180px 80px RGBA(214, 252, 254, 0.05)',
        'green-foam-glow-border': '0px 0px 40px 40px RGBA(214, 252, 254, 0.10)',
        'tl-green-foam-glow': '-15px -15px 20px 20px RGBA(214, 252, 254, 0.10)',
        'tr-green-foam-glow': '15px -15px 20px 20px RGBA(214, 252, 254, 0.10)',
        'blue-1-glow': '0px 0px 15px 5px RGBA(70, 164, 248, 1.00)',
        'blue-1-glow-inner': '0px 0px -15px -5px RGBA(70, 164, 248, 1.00)',
      },
      dropShadow: {
        ...defaultTheme.boxShadow,
        'green-foam-glow': '0px 0px 20px 20px RGBA(214, 252, 254, 0.05)',
      },
      ringWidth: {
        ...defaultTheme.ringWidth,
        DEFAULT: '1px'
      },
      padding: {
        ...defaultTheme.padding,
        px: '1px',
        '4px': '4px'
      },
      outline: {
        ...defaultTheme.outline,
        'low-emphasis': '#575757'
      },
      animation: {
        ellipsis: ' ellipsis 1.25s infinite'
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' }
        }
      },
      minHeight: {
        cardContent: '230px',
        fitContent: 'fit-content'
      }
    },
  },
  variants: {
    linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    extend: {},
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}