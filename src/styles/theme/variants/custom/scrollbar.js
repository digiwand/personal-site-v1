const scrollbar = {
  overflow: 'auto',
  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar-track': {
    borderRadius: '3px',
    backgroundColor: (t) => t.colors.backgroundHome,
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
