const iconButtons = {
  boxShadow: '0px 0px 10px transparent',

  svg: {
    height: '30rem',
    width: '30rem',

    path: {
      transition: 'fill 0.3s, transform 0.15s',
    },
  },

  secondary: {
    position: 'relative',
    background: (t) => t.colors.glassBg,
    border: (t) => t.colors.glassBorder,

    '&:active': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${t.colors.buttonBoxShadow}`,
    },
    '&:focus': {
      boxShadow: (t) => `inset 0 3px 5px rgb(18 21 26 / 9%), ${t.colors.buttonBoxShadow}`,
    },
    '&:hover': {
      '&:before': {
        opacity: 1,
      },
      path: {
        fill: (t) => t.colors.buttonHoverText,
      },
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
      backgroundImage: (t) => t.colors.buttonSecondaryHover,
      border: (t) => t.colors.buttonSecondaryHoverBorder,
    },

    '> svg': {
      zIndex: 3,
    },

    path: {
      fill: (t) => t.colors.buttonText,
    },
  },

  small: {
    svg: {
      height: '18px',
      width: '18px',
    },
    path: {
      fill: 'text',
    },
  },
};

export default iconButtons;
