import type { Theme } from 'theme-ui';

const styles: Theme['styles'] = {
  root: {
    fontSize: '1px', /* for using REM units */
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
    letterSpacing: ['1rem', '3rem', '3rem'],
  },
  h3: {
    variant: 'text.heading',
    fontWeight: '400',
    fontSize: [3, 4, 4],
    letterSpacing: '5rem',
  },
  h4: {
    variant: 'text.heading',
    fontWeight: '500',
    fontSize: [2, 3, 3],
    letterSpacing: ['1rem', '1.6rem', '1.6rem'],
  },
  h5: {
    variant: 'text.heading',
    fontWeight: [300, 400, 400],
    letterSpacing: ['1rem', '1.2rem', '1.2rem'],
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
