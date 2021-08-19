const fonts = {
  fonts: {
    // body: 'OpenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    body: 'BarlowCondensed, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'BarlowCondensed, "Avenir Next", sans-serif',
    profile: 'MarckScript, Ariel',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '12rem', '14rem', '16rem', '20rem', '22rem', '24rem', '28rem', '32rem', '58rem',
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
      color: 'primary',
    },
    sectionHeading: {
      display: 'block',
      textAlign: 'center',
      variant: 'text.heading',
      fontWeight: '700',
      fontSize: [3, 4, 4],
      letterSpacing: '4rem',
      pb: 5,

      '&:after': {
        content: '""',
        display: 'block',
        width: '90px',
        height: '3px',
        mx: 'auto',
        mt: 4,
        background: (t) => `${t.colors.primary}`,
      },
    },
  },
};

export default fonts;
