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

const colors = {
  background: PALETTE.BOLD.forest400,

  // -- General -----------------------------------------------------------------------------------

  text: PALETTE.BOLD.forest200,

  error: '#B00020',
  /** @todo: add link color */
  linkHover: PALETTE.BOLD.green200,

  heading: PALETTE.BOLD.navy200,

  scrollTrack: PALETTE.BOLD.white200,
  scrollThumb: PALETTE.BOLD.forest200,
  scrollThumbHover: PALETTE.BOLD.forest300,

  ...SVG.DEFAULT,

  // -- Components --------------------------------------------------------------------------------

  button: PALETTE.BOLD.forest200,
  buttonHoverText: PALETTE.BOLD.white300,

  frame: PALETTE.BOLD.white200,
  frameText: PALETTE.BOLD.forest400,
  frameActiveText: PALETTE.BOLD.white300,
  frameHoverText: PALETTE.BOLD.forest200,
  frameBorder: 'rgba(0, 0, 0, 0.1)',

  footerBg: PALETTE.BOLD.white200,
  footerText: PALETTE.BOLD.forest400,

  // -- Sections ----------------------------------------------------------------------------------

  homeBg: PALETTE.BOLD.white300,
  homeBgImage: 'linear-gradient( rgba(243, 243, 243, 0.4), rgba(243, 243, 243, 0) ), url("images/bg/leaves-2.jpg")'
  + ' no-repeat fixed 0 30%',
  homeBgBox: 'rgba(255, 255, 255, 0.9)',

  aboutBg: PALETTE.BOLD.white300,
  aboutHeader: PALETTE.BOLD.navy200,
  aboutText: PALETTE.BOLD.navy500,
  aboutFrame: PALETTE.BOLD.green400,

  workBg: PALETTE.BOLD.white300,
  workBgJobBox: 'rgba(254, 253, 255, 0.3)',
  workHeader: PALETTE.BOLD.grey300,
  workSubHeader: PALETTE.BOLD.grey400,
  workText: PALETTE.BOLD.grey500,

  techBg: PALETTE.BOLD.forest100,
  techHeader: PALETTE.BOLD.white,
  carouselItemBg: 'rgba(158, 180, 172,0.9)',

  contactBg: 'linear-gradient( rgba(33, 33, 33, 0.1), rgba(33, 33, 33, 0.2) ), url("images/bg/leaves-4.jpg") no-repeat fixed',
  contactBgBox: 'rgba(244,244,244, 0.68)',
  contactHeader: PALETTE.BOLD.navy200,
  contactSubHeader: PALETTE.BOLD.forest200,
  contactText: PALETTE.BOLD.grey400,
  contactDivider: 'rgba(92, 92, 92, 0.5)',
  contactPlant: PALETTE.BOLD.grey300,

  inputBg: 'rgba(219,220,217, 0.7)',
  inputAutofill: 'rgba(219,220,217, 0.9)',

  modes: {
    dark: {
      background: PALETTE.BOLD.forest400,

      // -- General -------------------------------------------------------------------------------

      scrollTrack: PALETTE.BOLD.white200,

      text: PALETTE.BOLD.forest200,
      heading: PALETTE.BOLD.forest200,

      ...SVG.LIGHT,

      // -- Components ----------------------------------------------------------------------------

      button: PALETTE.BOLD.forest200,
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

      homeBg: 'black',
      homeBgImage: 'black',
      homeBgBox: 'rgba(133, 133, 133, 0.1)',

      aboutBg: PALETTE.BOLD.grey500,
      aboutHeader: PALETTE.BOLD.forest200,
      aboutText: PALETTE.BOLD.grey200,

      workBg: PALETTE.BOLD.grey500,
      workBgJobBox: 'rgba(254, 253, 255, 0.3)',

      techBg: PALETTE.BOLD.black,
      techHeader: PALETTE.BOLD.forest200,
      carouselItemBg: 'rgba(0, 0, 0, 0.9)',

      contactBg: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) ), url("images/bg/leaves-4.jpg") no-repeat fixed',
      contactBgBox: 'rgba(0,0,0,0.83)',
      contactHeader: PALETTE.BOLD.forest200,
      contactSubHeader: PALETTE.BOLD.forest300,
      contactText: PALETTE.BOLD.grey400,
      contactDivider: 'rgba(92, 92, 92, 0.5)',
      contactPlant: PALETTE.BOLD.white300,

      inputBg: 'rgba(0,0,0, 0.8)',
      inputAutofill: 'rgba(33,33,33, 0.8)',
    },

    mint: {
      background: '#DFECEB',
      aboutBg: '#EFF9F0',

      inputBg: 'pink',

      text: '#002629',

      // to update
      frame: '#fafafb',
      frameText: '#233143',
    },
  },
};

export default colors;
