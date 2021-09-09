const fonts = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    // body: 'Courier, serif',
    // heading: 'Arial, "Avenir Next", sans-serif',
    heading: 'BarlowCondensed, "Avenir Next", sans-serif',
    heading2: 'Arial, "Avenir Next", sans-serif',
    profile: 'MarckScript, Arial',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '12rem', '14rem', '16rem', '18rem', '20rem', '22rem', '24rem', '28rem', '32rem', '46rem', '58rem',
  ],
  fontWeights: {
    body: 200,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: '1.2rem',
    caps: '0.2em',
  },

  text: {
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      lineHeight: 'body',
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      display: 'inline-block',
    },
    link: {
      transition: 'font-weight 0.3s, color 0.3s',

      ':hover': {
        color: (t) => t.colors.linkHover,
      },
    },
    sectionHeading: {
      variant: 'text.heading',
      letterSpacing: '12rem',
      // heading: '3rem',
      display: 'block',
      textAlign: 'center',
      fontWeight: '400',
      fontSize: [3, 4, 4],
      color: (t) => t.colors.heading,
      pb: 5,
    },
    sideHeading: {
      variant: 'text.heading',
      letterSpacing: '3rem',
      fontWeight: '400',
      fontSize: [3, 4, 2],
      color: (t) => t.colors.heading,
      textAlign: ['center', 'center', 'initial'],

      '&:before': {
        content: '"— "',
        paddingRight: 2,
        display: ['none', 'none', 'inline-block'],
      },
    },
  },
};

export default fonts;
