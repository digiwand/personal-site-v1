const iconButtons = {
  padding: 1,
  // height: '46px',
  // width: '46px',
  transition: 'background-color 150ms, box-shadow 150ms, border 150ms, transform 150ms',
  boxShadow: '0px 0px 10px transparent',

  '&:hover > a': {
    transform: 'rotate(10deg)',
  },

  svg: {
    height: '30rem',
    width: '30rem',

    path: {
      transition: 'fill 0.3s',
    },
  },

  primary: {
    border: '1px solid',
    borderColor: 'text',

    '&:hover': {
      border: '2px solid',
      transform: 'none',

      path: {
        fill: 'text',
      },
    },

    path: {
      fill: 'text',
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
