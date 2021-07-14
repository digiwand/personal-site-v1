/**
 * Theme object to be passed to the ThemeProvider component of the theme-ui npm package.
 * This can be used in other libraries and applications for increased interoperability.
 * 
 * Notice that we specify 1px font-size on styles.root (<html> element) so that we can utilize
 * 1px based rem units.
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
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },

  // Colors

  initialColorModeName: 'light',
  colors: {
    primary: '#07c',
    modes: {
      dark: {
        background: '#999',
        text: '#eee',
        primary: '#0cf',
        secondary: '#CAFFD0',
        accent: '#0cf',
        highlight: '#0cf',
        muted: '#0cf',
      },
      light: {
        background: '#fff',
        text: '#000',
        primary: '#2B3D41',
        secondary: '#CAFFD0',
        accent: '#CAFFD0',
        highlight: '#C9E4E7',
        muted: '#0cf',
      }
    }
  },

  // Styles

  styles: {
    root: {
      /** @todo figure out why background color isn't working */
      // backgroundColor: 'background',
      fontSize: '1px', /* for using REM units */
      fontFamily: 'body',
      fontWeight: 'body',

      color: 'text',
      body: {
        fontSize: 1,
        lineHeight: 'body',
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      // color: 'primary',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
};