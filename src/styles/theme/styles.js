const styles = {
  root: {
    fontSize: '1px', /* for using REM units */
    scrollBehavior: 'smooth',
    transition: 'background 500ms',
    overflow: 'initial',

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
    fontSize: [4, 5, 5],
  },
  h3: {
    variant: 'text.body',
    fontSize: [4, 5, 5],
  },
  h4: {
    variant: 'text.body',
    fontSize: [2, 3, 4],
  },
  h5: {
    variant: 'text.body',
    fontSize: 2,
  },
  h6: {
    variant: 'text.body',
    fontSize: 1,
  },
  p: {
    fontSize: 2,
  },
};

export default styles;
