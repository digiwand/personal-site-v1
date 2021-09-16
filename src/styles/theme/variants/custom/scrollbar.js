const scrollbar = {
  overflow: 'auto',
  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar-track': {
    borderRadius: '3rem',
    backgroundColor: (t) => t.colors.scrollTrack,
  },

  '&::-webkit-scrollbar': {
    width: '6rem',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: (t) => t.colors.scrollThumb,
    borderRadius: '3rem',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: (t) => t.colors.scrollThumbHover,
  },
  '::-webkit-scrollbar-thumb:active': {
    backgroundColor: (t) => t.colors.scrollThumbHover,
  },
};

export default scrollbar;
