const PALETTE = {
  BOLD: {
    black: 'rgb(0, 0, 0)',
    clay: 'rgb(193,175,159)',
    darkClay: 'rgb(175,131,109)',
    grayGradient: 'linear-gradient(rgba(133, 133, 133, 1), rgba(255, 255, 255,1 ))',
    white: 'rgb(254, 253, 255)',
    white200: 'rgb(237,237,236)',
    white300: 'rgb(239, 240, 241)',

    forest50: 'rgb(235, 245, 238)',
    forest100: 'rgb(158, 180, 172)',
    forest200: '#4D846A',
    forest300: 'rgb(55, 81, 79)',
    forest400: 'rgb(28,47,53)',

    green100: 'rgb(104, 155, 110)',
    green200: 'rgb(86, 141, 89)',
    green300: 'rgb(31, 106, 60)',
    green400: '#165030',
    green500: 'rgb(38,58,43)',

    navy200: 'rgb(84, 100, 140)',
    navy300: 'rgb(73,85,119)',
    navy400: 'rgb(40,48,66)',
    navy500: 'rgb(39,41,61)',

    grey50: 'rgb(235,236,238)',
    grey100: 'rgb(184, 184, 184)',
    grey200: 'rgb(166, 166, 166)',
    grey300: 'rgb(128, 128, 128)',
    grey400: 'rgb(92, 92, 92)',
    grey500: 'rgb(14, 14, 14)',
  },

  SUNRISE: {
    headerSlateBlue: 'rgba(71,60,139, 0.9)',
  },
};

const SVG = {
  DEFAULT: {
    // - Tech
    svgGitLogo: '#2F2707',
    svgGitText: '#DE4C36',
    svgNextJs: '#000',
    svgNodeJs: '#333',
  },

  LIGHT: {
    // - Tech
    svgGitLogo: '#ddd',
    svgGitText: '#ddd',
    svgNextJs: '#ddd',
    svgNodeJs: '#ddd',
  },
};

// tech: 'linear-gradient( rgba(220, 220, 220, 0.6), rgba(255, 255, 255, 0.8) ), url("/images/bg/cement.jpg") repeat',
// + 'linear-gradient(217deg, rgba(117, 197, 202,.8), rgba(117, 197, 202,0) 55%),' // teal
// + 'linear-gradient(30deg, rgba(249, 198, 250,1), rgba(249, 198, 250,0) 55%),' // pink
// + 'linear-gradient(15deg, rgba(255, 217, 114,0.8), rgba(255, 217, 114,0) 45%),' // orange
// + 'linear-gradient(300deg, rgba(101, 85, 154,1), rgba(101, 85, 154,0) 65%),' // purple

const colors = {

  // -- Defaults -----------------------------------------------------------------------------------

  background: '#764ba2',
  text: 'floralwhite',

  // -- General -----------------------------------------------------------------------------------

  backgroundMain: 'linear-gradient(127deg, rgba(101, 85, 154,0.9), rgba(101, 85, 154,0.2) 70.71%),' // purple
    + 'linear-gradient(217deg, rgba(249, 198, 250,0.8), rgba(249, 198, 250,0) 70.71%),' // pink
    + 'linear-gradient(336deg, rgba(117, 197, 202,0.9), rgba(117, 197, 202,1) 70.71%)', // teal

  glassBg: 'linear-gradient(70deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.30))',
  glassBorder: '1px solid rgba( 255, 255, 255, 0.18 )',

  error: '#B00020',
  /** @todo: add link color */
  linkHover: 'orange',

  heading: PALETTE.BOLD.navy200,

  scrollTrack: 'rgba(255, 255, 255, 0.1)',
  scrollThumb: 'rgba(255, 255, 255, 0.6)',
  scrollThumbHover: 'rgba(249, 198, 250, 0.6)',

  textShadow: '0.07em 0.08em 0.05em rgba(143,121,183, 0.75)',

  ...SVG.DEFAULT,

  // -- Components --------------------------------------------------------------------------------

  buttonText: 'white',
  buttonBoxShadow: '0 4px 8px 0 rgba( 31, 38, 135, 0.17 )',
  buttonHover: 'linear-gradient(70deg, rgba(103,82,170, 0.50), rgba(103,82,170, 0.70))',
  buttonHoverBorder: '1px solid rgba( 103,82,170, 0.18 )',
  buttonHoverText: PALETTE.BOLD.white300,
  buttonSecondaryHover: 'linear-gradient(40deg, rgba(255, 170, 11, 0.85), rgba(255, 185, 11, 0.70), rgba(255, 170, 11, 0.85))',
  buttonSecondaryHoverBorder: '1px solid rgba(255, 185, 11, 0.18 )',

  frameText: PALETTE.BOLD.white,
  frameHoverText: 'rgba(103,82,170, 0.8)',
  frameBorder: 'rgba(0, 0, 0, 0.1)',

  footerBg: 'rgba(120, 75, 155, 0.65)',
  footerText: PALETTE.BOLD.white,

  navDrawerBg: 'linear-gradient(70deg, rgba(101, 85, 154, 0.55), rgba(101, 85, 154, 0.73))',
  navDrawerActiveColor: 'rgba(255, 237, 154, 0.9)',
  navDrawerSocialIconsHoverColor: 'rgba(255, 200, 144, 0.9)',
  navHeaderBg: 'rgba(171, 75, 162, 0.35)',
  navTabHoverColor: 'orange',

  // -- Sections ----------------------------------------------------------------------------------

  homeHello: 'rgba(250,214,167, 0.9)',

  aboutHeader: PALETTE.BOLD.navy200,
  aboutText: PALETTE.BOLD.navy500,
  aboutFrame: PALETTE.BOLD.green400,

  workBgJobBox: 'rgba(254, 253, 255, 0.3)',
  workHeader: PALETTE.BOLD.navy200,
  workSubHeader: PALETTE.BOLD.grey400,

  techHeader: PALETTE.BOLD.white,
  carouselItemBg: 'transparent',

  contactSubHeader: PALETTE.BOLD.grey400,
  contactText: 'PALETTE.BOLD.grey400',
  contactIcon: 'rgba(232, 232, 232, 0.8)',
  contactDivider: 'rgba(232, 232, 232, 0.5)',
  contactPlant: 'rgba(230, 230, 230, 0.8)',

  inputBg: 'rgba(255, 255, 255, 0.25)',
  inputAutofill: 'rgba(219,220,217, 0.9)',

  modes: {
    dark: {

      // -- Defaults -----------------------------------------------------------------------------------

      background: PALETTE.BOLD.forest400,

      // -- General -------------------------------------------------------------------------------

      backgroundMain: PALETTE.BOLD.forest400,
      glassBg: 'linear-gradient(70deg, rgba(17, 25, 40, 0.65), rgba(17, 25, 40, 0.75)',
      glassBorder: 'border: 1px solid rgba( 255, 255, 255, 0.18 )',

      scrollTrack: PALETTE.BOLD.white200,

      text: PALETTE.BOLD.forest200,
      heading: PALETTE.BOLD.forest200,

      ...SVG.LIGHT,

      // -- Components ----------------------------------------------------------------------------

      // button: PALETTE.BOLD.forest200,
      buttonHover: 'orange',
      buttonHoverText: PALETTE.BOLD.white,

      // to update
      frame: PALETTE.BOLD.grey500,
      frameText: PALETTE.BOLD.white200,
      frameActiveText: PALETTE.BOLD.white,
      frameHoverText: PALETTE.BOLD.forest200,
      frameBorder: 'rgba(83, 83, 83, 0.1)',

      footerBg: PALETTE.BOLD.black,
      footerText: PALETTE.BOLD.grey200,

      // -- Sections ------------------------------------------------------------------------------

      aboutHeader: PALETTE.BOLD.forest200,
      aboutText: PALETTE.BOLD.grey200,

      workBgJobBox: 'rgba(254, 253, 255, 0.3)',

      techHeader: PALETTE.BOLD.forest200,
      carouselItemBg: 'rgba(0, 0, 0, 0.9)',

      contactSubHeader: PALETTE.BOLD.forest300,
      contactText: PALETTE.BOLD.grey400,
      contactDivider: 'rgba(92, 92, 92, 0.5)',
      contactPlant: PALETTE.BOLD.white300,

      inputBg: 'rgba(0,0,0, 0.8)',
      inputAutofill: 'rgba(33,33,33, 0.8)',
    },

    mint: {
      background: '#DFECEB',

      inputBg: 'pink',

      text: '#002629',

      // to update
      frame: '#fafafb',
      frameText: '#233143',
    },
  },
};

export default colors;
