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

  background: '#6752aa',
  text: 'floralwhite',

  // -- General -----------------------------------------------------------------------------------

  backgroundMain: 'linear-gradient(127deg, rgba(101, 85, 154,0.9), rgba(101, 85, 154,0.2) 70.71%),' // purple
    + 'linear-gradient(217deg, rgba(255, 178, 55,0.8), rgba(255, 178, 55,0) 70.71%),' // pink
    + 'linear-gradient(336deg, rgba(153,243,251,0.9), rgba(153,243,251,1) 70.71%)', // teal

  glassBg: 'linear-gradient(70deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.30))',
  glassBorder: '1px solid rgba( 255, 255, 255, 0.18 )',

  error: '#B00020',
  /** @todo: add link color */
  linkHover: 'orange',

  heading: PALETTE.BOLD.navy200,

  scrollTrack: 'rgba(255, 255, 255, 0.1)',
  scrollThumb: 'rgba(255, 255, 255, 0.6)',
  scrollThumbHover: 'rgba(249, 198, 250, 0.6)',

  textGradient: 'linear-gradient(45deg, #efefef 30%, #fff)', // purple and teal
  textGradientBackup: '#65559a',
  // textGradient: 'linear-gradient(45deg, #8f70d3 30%, #00b9c4)', // purple and teal
  // textGradient: 'linear-gradient(45deg, #327E85 30%, #65559a)',
  textShadow: '0.07em 0.08em 0.05em rgba(143,121,183, 0.75)',

  ...SVG.DEFAULT,

  // -- Components --------------------------------------------------------------------------------

  buttonBoxShadow: '0 4px 8px 0 rgba( 31, 38, 135, 0.17 )',
  buttonHover: 'linear-gradient(70deg, rgba(103,82,170, 0.50), rgba(103,82,170, 0.70))',
  buttonHoverBorder: '1px solid rgba( 103,82,170, 0.18 )',
  buttonHoverText: PALETTE.BOLD.white300,
  buttonSecondaryHover: 'linear-gradient(40deg, rgba(255, 170, 11, 0.85), rgba(255, 185, 11, 0.70), rgba(255, 170, 11, 0.85))',
  buttonSecondaryHoverBorder: '1px solid rgba(255, 185, 11, 0.18 )',
  buttonText: 'white',

  frameBorder: 'rgba(0, 0, 0, 0.1)',
  frameHoverText: 'rgba(103,82,170, 0.8)',
  frameText: PALETTE.BOLD.white,

  footerBg: 'rgba(120, 75, 155, 0.65)',
  footerText: PALETTE.BOLD.white,

  navDrawerActiveColor: 'rgba(255, 237, 154, 0.9)',
  navDrawerBg: 'linear-gradient(70deg, rgba(101, 85, 154, 0.55), rgba(101, 85, 154, 0.73))',
  navDrawerSocialIconsHoverColor: 'rgba(255, 200, 144, 0.9)',
  navHeaderBg: 'rgba(171, 75, 162, 0.35)',
  navHeaderLogoBgImage: (t) => `linear-gradient(45deg, ${t.colors.text}, pink)`,
  navHeaderLogoBgImageScrolled: 'linear-gradient(45deg, #f49df7, lavender, orange)',
  navTabHoverColor: 'orange',

  // -- Sections ----------------------------------------------------------------------------------

  // homeHello: 'rgba(250,214,167, 0.9)',
  homeHello: 'rgba(255,255,255, 0.9)',

  aboutHeader: PALETTE.BOLD.navy200,
  aboutText: PALETTE.BOLD.navy500,
  aboutFrame: PALETTE.BOLD.green400,

  workBgJobBox: 'rgba(254, 253, 255, 0.3)',
  workHeader: 'floralwhite',
  workSubHeader: 'floralwhite',

  techHeader: PALETTE.BOLD.white,
  carouselItemBg: 'transparent',

  contactSubHeader: 'floralwhite',
  contactText: 'floralwhite',
  contactIcon: 'rgba(232, 232, 232, 0.8)',
  contactDivider: 'rgba(232, 232, 232, 0.5)',
  contactPlant: 'rgba(230, 230, 230, 0.8)',
  contactReCaptcha: 'rgba(232, 232, 232, 0.5)',

  inputBg: 'rgba(255, 255, 255, 0.25)',
  inputAutofill: 'rgba(219,220,217, 0.9)',

  modes: {
    dark: {

      // #0cbaba teal
      // #0d324d dark blue
      // #7f5a83
      // #380036
      // -- Defaults -----------------------------------------------------------------------------------

      background: '#0F0E18',

      // -- General -------------------------------------------------------------------------------

      backgroundMain: 'radial-gradient(circle at 4% 0%, rgba(117,197,202, 0.3), transparent 23%),' // teal
      + 'radial-gradient(circle at 59% -16%, rgba(101, 85, 154, 0.5), transparent 21%),' // purple
      + 'radial-gradient(circle at top right, rgba(101, 85, 154, 0.5), transparent 18%),' // purple
      + 'radial-gradient(circle at 0% 40%, rgba(255, 217, 114, 0.08), transparent 10%),' // orange
      + 'radial-gradient(circle at 100% 87%, rgba(255, 217, 114, 0.08), transparent 8%),' // orange
      + 'radial-gradient(circle at -5% 85%, rgba(71,60,139, 0.8), transparent 33%),' // dark slate blue
      + 'radial-gradient(closest-corner at 65% 60%, rgba(71,60,139, 0.8), transparent 85%),' // dark slate blue
      + 'radial-gradient(closest-corner at 75% 75%, rgba(171,60,139, 0.3), transparent 46%)', // pink

      glassBg: 'linear-gradient(70deg, rgba(88, 88, 98, 0.18), rgba(88, 88, 98, 0.35))',
      glassBorder: '1px solid rgba( 120, 120, 120, 0.18 )',

      error: '#B00020',
      /** @todo: add link color */
      linkHover: 'teal',

      heading: PALETTE.BOLD.white,

      scrollTrack: 'rgba(120, 120, 120, 0.1)',
      scrollThumb: 'rgba(250, 250, 250, 0.6)',
      scrollThumbHover: 'rgba(153,243,251, 0.6)',

      textGradient: 'linear-gradient(45deg, #efefef 30%, #fff)', // purple and teal
      textGradientBackup: '#65559a',
      // textGradient: 'linear-gradient(45deg, #8f70d3 30%, #00b9c4)', // purple and teal
      // textGradient: 'linear-gradient(45deg, #327E85 30%, #65559a)',
      textShadow: '0.07em 0.08em 0.05em rgba(143,121,183, 0.75)',

      ...SVG.LIGHT,

      // -- Components -----------------------xf-----------------------------------------------------

      buttonBoxShadow: '0 4px 8px 0 rgba( 31, 38, 135, 0.17 )',
      buttonHover: 'linear-gradient(70deg, rgba(117,197,202, 0.50), rgba(117,197,202, 0.70))',
      buttonHoverBorder: '1px solid rgba( 117,197,202, 0.18 )',
      buttonHoverText: PALETTE.BOLD.white300,
      buttonSecondaryHover: 'linear-gradient(40deg, rgba(0,128,128, 0.85), '
        + 'rgba(153,243,251, 0.70), rgba(0,128,128, 0.85))',
      buttonSecondaryHoverBorder: '1px solid rgba(255, 185, 11, 0.18 )',
      buttonText: 'white',

      frameBorder: 'rgba(83, 83, 83, 0.1)',
      frameHoverText: 'rgba(103,82,170, 0.8)',
      frameText: PALETTE.BOLD.white,

      footerBg: 'rgba(117,197,202, 0.38)',
      footerText: PALETTE.BOLD.white,

      navDrawerActiveColor: 'rgba(117,197,202, 0.9)',
      navDrawerBg: 'linear-gradient(70deg, rgba(51, 35, 80, 0.55), rgba(33, 33, 33, 0.73))',
      navDrawerSocialIconsHoverColor: 'rgba(117,197,202, 0.9)',
      navHeaderBg: 'rgba(117,197,202, 0.38)',
      navHeaderLogoBgImage: (t) => t.colors.text,
      navHeaderLogoBgImageScrolled: 'linear-gradient(45deg, #f49df7, #0cbaba, orange)',
      navTabHoverColor: 'teal',

      // -- Sections ------------------------------------------------------------------------------

      // aboutHeader: PALETTE.BOLD.navy200,
      // aboutText: PALETTE.BOLD.navy500,
      // aboutFrame: PALETTE.BOLD.green400,

      // workBgJobBox: 'rgba(254, 253, 255, 0.3)',
      // workHeader: 'floralwhite',
      // workSubHeader: 'floralwhite',

      // techHeader: PALETTE.BOLD.white,
      // carouselItemBg: 'transparent',

      // contactSubHeader: 'floralwhite',
      // contactText: 'floralwhite',
      // contactIcon: 'rgba(232, 232, 232, 0.8)',
      contactDivider: 'rgba(92, 92, 92, 0.5)',
      contactPlant: 'rgba(190, 190, 190, 0.8)',
      contactReCaptcha: 'rgba(192, 192, 192, 0.5)',

      inputBg: 'rgba(58,54,90, 0.6)',
      inputAutofill: 'rgba(71,60,139, 0.8)',
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
