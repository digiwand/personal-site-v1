import iconButtons from './iconButtons';

const buttons = {
  icon: iconButtons,

  primary: {
    position: 'relative',
    height: '42rem',
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

    color: (t) => t.colors.buttonText,
    background: (t) => t.colors.glassBg,
    border: (t) => t.colors.glassBorder,
    boxShadow: (t) => `inset 0 3px 2px rgb(18 21 26 / 0%), ${t.colors.buttonBoxShadow}`,

    '&:hover': {
      color: (t) => t.colors.buttonHoverText,
      border: (t) => t.colors.buttonHoverBorder,
    },

    '&:active': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${t.colors.buttonBoxShadow}`,
    },
    '&:focus': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${t.colors.buttonBoxShadow}`,
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
      backgroundImage: (t) => t.colors.buttonHover,
      border: (t) => t.colors.buttonHoverBorder,
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
    '&:before': {
      background: (t) => t.colors.buttonSecondaryHover,
      border: (t) => t.colors.buttonSecondaryHoverBorder,
    },
  },

  borderRadius: '4px',

};

export default buttons;
