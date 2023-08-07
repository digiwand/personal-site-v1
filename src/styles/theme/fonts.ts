import { getColor } from '@theme-ui/color';

const fonts = {
  fonts: {
    body: 'Avenir Next, Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: 'Rubik, "Avenir Next", sans-serif',
    heading2: 'Arial, "Avenir Next", sans-serif',
    barlow: 'BarlowCondensed, sans-serif',
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
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: ['0.8rem', '1.6rem', '1.6rem'],
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
      fontSize: ['14rem', 1, 2],
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      display: 'inline-block',
      color: (t) => getColor(t, 'homeHello'),
    },

    gradient: {
      backgroundColor: (t) => getColor(t, 'textGradientBackup'),
      backgroundImage: (t) => getColor(t, 'textGradient'),
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    link: {
      color: (t) => getColor(t, 'link'),
      transition: 'color 0.3s',

      ':hover': {
        color: (t) => getColor(t, 'linkHover'),
      },
    },
    shadow: {
      textShadow: (t) => getColor(t, 'textShadow'),
    },
  },
};

export default fonts;
