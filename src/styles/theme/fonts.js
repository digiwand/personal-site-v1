const fonts = {
  fonts: {
    // body: 'OpenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    body: 'BarlowCondensed, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'BarlowCondensed, "Avenir Next", sans-serif',
    profile: 'MarckScript, Ariel',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '12rem', '14rem', '16rem', '20rem', '22rem', '24rem', '28rem', '32rem', '46rem', '58rem',
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
    body: '2rem',
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
    },
    link: {
      transition: 'font-weight 0.3s, color 0.3s',

      ':hover': {
        color: (t) => t.colors.linkHover,
        fontWeight: 700,
      },
    },
    sectionHeading: {
      display: 'block',
      textAlign: 'center',
      variant: 'text.heading',
      fontWeight: '400',
      fontSize: [3, 4, 4],
      letterSpacing: '12rem',
      color: (t) => t.colors.heading,
      pb: 5,
    },
  },
};

export default fonts;
