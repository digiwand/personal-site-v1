const scrollbar = {
  overflow: 'auto',

  '&::-webkit-scrollbar-track': {
    borderRadius: '3px',
    boxShadow: 'inset 0 0 6px rgba(33,33,33,0.1)',
    backgroundColor: ' transparent',
  },

  '&::-webkit-scrollbar': {
    width: '6px',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'text',
    borderRadius: '3px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'primary',
  },
  '::-webkit-scrollbar-thumb:active': {
    backgroundColor: 'primary',
  },
};

export default scrollbar;
