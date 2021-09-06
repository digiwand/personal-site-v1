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
    fontSize: [5, 6, 6],
  },
  h2: {
    variant: 'text.heading',
    fontWeight: '700',
    fontSize: [4, 5, 5],
    letterSpacing: '3rem',
  },
  h3: {
    variant: 'text.heading',
    fontWeight: '700',
    fontSize: [3, 4, 4],
    letterSpacing: '4rem',
  },
  h4: {
    variant: 'text.heading',
    fontSize: [2, 3, 4],
  },
  h5: {
    variant: 'text.heading',
    fontSize: 2,
  },
  h6: {
    variant: 'text.heading',
    fontSize: 1,
  },
  p: {
    fontSize: 2,
  },
};

export default styles;
