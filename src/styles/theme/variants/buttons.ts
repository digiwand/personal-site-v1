import { getColor } from '@theme-ui/color'
import type { Theme } from 'theme-ui';
import iconButtons from './iconButtons';

const buttons: Theme['buttons'] = {
  icon: iconButtons,

  primary: {
    position: 'relative',
    height: '48rem',
    letterSpacing: '3rem',
    fontFamily: 'barlow',
    fontSize: 2,
    fontWeight: '300',
    borderRadius: '4rem',
    transition: 'background .18s ease-in-out,'
      + ' border .18s ease-in-out,'
      + ' box-shadow .18s ease-in-out,'
      + ' color .18s ease-in-out,'
      + ' transform .18s ease-in-out',

    background: (t) => getColor(t, 'buttonBg'),
    border: (t) => getColor(t, 'buttonBorder'),
    color: (t) => getColor(t, 'buttonText'),

    '&:hover': {
      border: (t) => getColor(t, 'glassBorder'),
      color: (t) => getColor(t, 'buttonHoverText'),
    },
    '&:active': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${getColor(t, 'buttonBoxShadow}')}`,
    },
    '&:focus': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${getColor(t, 'buttonBoxShadow}')}`,
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      opacity: '0',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderRadius: '4rem',
      zIndex: '2',
      transition: 'opacity 0.15s ease-out',

      background: (t) => getColor(t, 'glassBg'),
      backgroundImage: (t) => getColor(t, 'glassBg'),
      border: (t) => getColor(t, 'buttonBorder'),
    },

    '&:hover:before': {
      opacity: 1,
    },

    '&> a': {
      position: 'relative',
      zIndex: 3,
    },
    '&> span': {
      position: 'relative',
      zIndex: 3,
    },
    '&> svg': {
      position: 'relative',
      zIndex: 3,
    },
  },

  secondary: {
    background: (t) => getColor(t, 'buttonSecondaryBg'),
    border: (t) => getColor(t, 'buttonSecondaryBorder'),
  },

  tag: {
    fontFamily: 'barlow',
    fontSize: 1,
    fontWeight: '300',
    px: 3,
    py: 0,
    mr: 2,
    mb: 2,
    height: '38rem',
    background: 'transparent',
    backgroundImage: 'transparent',
    backdropFilter: 'blur(4px) saturate(130%)',
    transition: 'background .08s ease-in-out,'
      + ' border .08s ease-in-out,'
      + ' box-shadow .08s ease-in-out,'
      + ' color .08s ease-in-out,'
      + ' transform .08s ease-in-out',

    border: (t) => getColor(t, 'buttonBorder'),

    '&:hover': {
      boxShadow: '4rem 5rem 3rem 0 rgba(133, 90, 155, 0.37)',
      transform: 'translate(-2rem, -1.5rem)',
    },
    '&:active': {
      backgroundImage: (t) => getColor(t, 'glassBg'),
    },
    '&:focus': {
      backgroundImage: (t) => getColor(t, 'glassBg'),
    },
  },
};

export default buttons;
