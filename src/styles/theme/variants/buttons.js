import iconButtons from './iconButtons';

const buttons = {
  icon: iconButtons,

  primary: {
    borderRadius: 0,
    height: '42rem',
    letterSpacing: '3rem',
    fontFamily: 'heading',
    fontSize: 2,
    fontWeight: '300',
    background: 'rgba(255,255,255,0)',
    color: (t) => t.colors.button,
    border: (t) => `1px solid ${t.colors.button}`,
    transition: 'background .1s ease-in-out, color .1s ease-in-out, transform .03s ease-in-out',

    '&:hover': {
      color: (t) => `${t.colors.buttonHoverText}`,
      background: (t) => `${t.colors.button}`,
      border: (t) => `1px solid ${t.colors.button}`,
    },

    '&:active': {
      transform: 'scale(.96)',
    },
  },

  borderRadius: '4px',

};

export default buttons;
