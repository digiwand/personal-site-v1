import iconButtons from './iconButtons';

const buttons = {
  icon: iconButtons,

  primary: {
    borderRadius: 0,
    height: '48rem',
    letterSpacing: '3rem',
    fontFamily: 'heading',
    fontSize: 2,
    fontWeight: '300',
    color: (t) => t.colors.primary,
    background: 'rgba(255,255,255,0)',
    border: (t) => `1px solid ${t.colors.primary}`,
    transition: 'background .1s ease-in-out, color .1s ease-in-out, transform .03s ease-in-out',

    '&:hover': {
      color: (t) => `${t.colors.background}`,
      background: (t) => `${t.colors.primary}`,
      border: (t) => `1px solid ${t.colors.primary}`,
    },

    '&:active': {
      transform: 'scale(.96)',
    },
  },

  borderRadius: '4px',

};

export default buttons;
