import { getColor } from '@theme-ui/color'
import { ThemeUICSSObject } from 'theme-ui';

const iconButtons: ThemeUICSSObject = {
  boxShadow: '0 0 10rem transparent',

  svg: {
    height: '30rem',
    width: '30rem',

    path: {
      transition: 'fill 0.3s, transform 0.15s',
    },
  },

  secondary: {
    position: 'relative',
    background: (t) => getColor(t, 'buttonSecondaryBg'),
    border: (t) => getColor(t, 'buttonSecondaryBorder'),

    '&:active': {
      boxShadow: (t) => `inset 0 3rem 5rem rgb(18 21 26 / 9%), ${getColor(t, 'buttonBoxShadow')}`,
    },
    '&:focus': {
      boxShadow: (t) => `inset 0 3rem 5rem rgb(18 21 26 / 9%), ${getColor(t, 'buttonBoxShadow')}`,
    },
    '&:hover': {
      '&:before': {
        opacity: 1,
      },
      path: {
        fill: (t) => getColor(t, 'buttonHoverText'),
      },
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      opacity: '0',
      top: '0',
      left: '0',
      width: '28rem',
      height: '28rem',
      borderRadius: '4rem',
      zIndex: '2',
      transition: 'opacity 0.15s ease-out',
      backgroundImage: (t) => getColor(t, 'buttonSecondaryBg'),
      border: (t) => getColor(t, 'buttonSecondaryBorder'),
    },

    '> svg': {
      zIndex: 3,
    },

    path: {
      fill: (t) => getColor(t, 'buttonText'),
    },
  },

  small: {
    svg: {
      height: '18rem',
      width: '18rem',
    },
    path: {
      fill: 'text',
    },
  },
};

export default iconButtons;
