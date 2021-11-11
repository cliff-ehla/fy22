const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    options: {
      whitelistPatterns: [/svelte-/],
    },
  },
  theme: {
    fontSize: {
      'xxs': ['0.6em'],
      'xs': ['0.75em'],
      'sm': ['0.875em'],
      DEFAULT: ['1em'],
      'p2': ['1.125em'],
      'p3': ['1.375em'],
      'p4': ['1.625em'],
      't1': ['1.25em', {lineHeight: '1.1'}],
      't2': ['1.5em', {lineHeight: '1.1'}],
      't3': ['1.75em', {lineHeight: '1'}],
      'h1': ['3.75em', {lineHeight: '1'}],
      'h2': ['5em', {lineHeight: '1'}],
      'h3': ['5.625em', {lineHeight: '1'}]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        '50': '#FCFCFC',
        '100': '#FAFAFA',
        '200': '#F2F2F2',
        '300': '#b4b4b4',
        '400': '#8B8B8B',
        '500': '#525252',
        '700': '#424242',
        '800': '#000000'
      },
      red:  {
        '500': '#FF6A3A',
        '700': '#E04A40'
      },
      blue: {
        '100': '#eefbff',
        '400': '#639fe1',
        '500': '#007AFF'
      },
      yellow: {
        '100': '#FFFACE',
        '400': '#FFEE54',
        '500': '#FFE500',
        '700': '#DBB800',
        '900': '#9e8e00'
      },
      brown: {
        '50': '#FFFAF5',
        '100': '#F2E9E1',
        '100a': '#ffe9d3',
        '200': '#debc9a',
        '200a': '#DFA672',
        '400': '#977250',
        '400a': '#C26610',
        '500': '#624122',
        '700': '#462F18'
      },
      green: {
        '100': '#f0ffea',
        '300': '#AAC6A0',
        '400h': '#86B974',
        '500': '#55BA92',
        '800': '#0c7d51',
        '900': '#214a3a'
      },
      lemon: {
        '300': '#D6D294'
      },
      wine: {
        '500': '#742626'
      },
      purple: {
        '400': '#CA75F5',
        '500': '#8D53E3'
      }
    },
    borderRadius: {
      none: '0px',
      sm: '0.25rem',
      DEFAULT: '0.5rem',
      lg: '1rem',
      xl: '2rem',
      xxl: '3rem',
      xxxl: '4rem',
      full: '9999px',
    },
    extend: {
      colors: {
        'regal-blue': {
          '100': '#ECF3FF',
          '200': '#a2b0ca',
          '500': '#1E3E78',
          '400h': '#3D5EA9',
          '300h': '#6384ce'
        },
        'regal-red': {
          '100': '#F4E3E5',
          '500': '#9F545D'
        }
      },
      height: {
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem'
      },
      maxWidth: {
        none: 'none',
        xs: '10rem',
        sm: '14rem',
        md: '18rem',
        lg: '22rem',
        xl: '26rem'
      }
    }
  },
  variants: {
    display: ['responsive','group-hover'],
    extend: {
      backgroundColor: ['even', 'odd']
    }
  }
};
