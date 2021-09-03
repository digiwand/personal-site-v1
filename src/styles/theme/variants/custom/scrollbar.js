const scrollbar = {
  overflow: 'auto',
  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar-track': {
    borderRadius: '3px',
    backgroundColor: (t) => t.colors.homeBg,
  },

  '&::-webkit-scrollbar': {
    width: '6px',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: (t) => t.colors.scrollThumb,
    borderRadius: '3px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: (t) => t.colors.scrollThumbHover,
  },
  '::-webkit-scrollbar-thumb:active': {
    backgroundColor: (t) => t.colors.scrollThumbHover,
  },
};

export default scrollbar;
