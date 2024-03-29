import type { Theme } from 'theme-ui';

import colors from './colors';
import styles from './styles';
import fonts from './fonts';

import buttons from './variants/buttons';
import forms from './variants/forms';
import images from './variants/images';

const makeTheme = <T extends Theme>(t: T) => t;

/**
 * Theme object to be passed to the ThemeProvider component of the theme-ui npm package.
 * This can be used in other libraries and applications for increased interoperability.
 *
 * See styles.root for styles applied to the <html> and <body> elements. Notice that we specify
 * 1px font-size on styles.root (<html> element) so that we can utilize 1px based rem units.
 *
 * @see {@link https://www.theme-ui.com/theme-spec}
 */
const theme = makeTheme({
  initialColorModeName: 'light',
  // do not auto-detect light or dark mode
  config: {
    useColorSchemeMediaQuery: false,
  },

  breakpoints: [
    '40em', '@media (min-width: 56em) and (orientation: landscape)', '64em',
  ],
  sizes: {
    container: '1420rem',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  colors,
  ...fonts,
  styles,

  // -- Variants - Overrides default theme-ui variants --------------------------------------------

  buttons,
  forms,
  images,
});

export default theme;

export type ExactTheme = typeof theme;
