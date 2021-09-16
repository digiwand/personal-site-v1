const fonts = {
  fonts: {
    body: 'Avenir Next, Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: 'Rubik, "Avenir Next", sans-serif',
    heading2: 'Arial, "Avenir Next", sans-serif',
    barlow: 'BarlowCondensed, sans-serif',
    profile: 'MarckScript, Arial',
  },
  fontSizes: [
    '12rem', // 0
    '16rem', // 1
    '18rem', // 2
    '20rem', // 3
    '22rem', // 4
    '24rem', // 5
    '28rem', // 6
    '34rem', // 7
    '46rem', // 8
    '58rem', // 9
  ],
  fontWeights: {
    body: 300,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: '1.6rem',
    header: '2.4rem',
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
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      display: 'inline-block',
      color: (t) => t.colors.homeHello,
    },

    gradient: {
      backgroundColor: (t) => t.colors.textGradientBackup,
      backgroundImage: (t) => t.colors.textGradient,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    link: {
      color: (t) => t.colors.link,
      transition: 'color 0.3s',

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
      textAlign: ['center', 'center', 'initial'],

      '&:before': {
        content: '"— "',
        paddingRight: 2,
        display: ['none', 'none', 'inline-block'],
      },
    },
    shadow: {
      textShadow: (t) => t.colors.textShadow,
    },
  },
};

export default fonts;
