const styles = {
  root: {
    fontSize: '1px', /* for using REM units */
    scrollBehavior: 'smooth',
    transition: 'background 500ms',
    minWidth: '320px',

    body: {
      variant: 'text.body',
      fontSize: 1,
    },
  },

  h1: {
    variant: 'text.heading',
    fontSize: [6, 7, 7],
  },
  h2: {
    variant: 'text.heading',
    fontSize: [4, 5, 5],
    letterSpacing: '3rem',
  },
  h3: {
    variant: 'text.heading',
    fontWeight: '500',
    fontSize: [3, 4, 4],
    letterSpacing: '5rem',
  },
  h4: {
    variant: 'text.heading',
    fontSize: [1, 3, 4],
    textShadow: 'none',
  },
  h5: {
    variant: 'text.heading',
    fontSize: 1,
  },
  h6: {
    variant: 'text.heading',
    fontSize: 0,
  },
  p: {
    fontSize: 1,
  },
};

export default styles;
