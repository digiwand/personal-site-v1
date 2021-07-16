/**
 * Theme object to be passed to the ThemeProvider component of the theme-ui npm package.
 * This can be used in other libraries and applications for increased interoperability.
 * 
 * See styles.root for styles applied to the <html> and <body> elements. Notice that we specify 
 * 1px font-size on styles.root (<html> element) so that we can utilize 1px based rem units.
 * 
 * @see {@link https://www.theme-ui.com/theme-spec}
 */ 
export default {
  // Layout and Spacing

  breakpoints: [
    '40em', '@media (min-width: 56em) and (orientation: landscape)', '64em',
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Fonts

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '12rem', '14rem', '16rem', '20rem', '24rem', '32rem', '48rem', '64rem'
  ],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  text: {
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'primary',
    },
  },

  // Colors

  initialColorModeName: 'light',
  colors: {
    primary: '#07c',
    modes: {
      dark: {
        background: '#222',
        text: '#e6e6e6',
        primary: '#BB86FC',
        secondary: '#CAFFD0',
        accent: '#2e2e2e',
        highlight: '#0cf',
        muted: '#2e2e2e',
      },
      light: {
        background: '#DFECEB',
        text: '#002629',
        primary: '#4A5859',
        secondary: '#E9E9E9',
        accent: '#FAE6C6',
        highlight: '#FAE6C6',
        muted: 'grey',
      }
    }
  },

  // Styles

  styles: {
    root: {
      fontSize: '1px', /* for using REM units */
      body: {
        variant: 'text.body',
        fontSize: 1,
      },
    },

    h1: {
      variant: 'text.heading',
      fontSize: [5,6,6],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3,4,5],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [2,3,4],
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
  },
};