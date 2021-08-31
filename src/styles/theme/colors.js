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
    // forest200: 'rgb(81, 115, 105)',
    forest300: 'rgb(55, 81, 79)',
    forest400: 'rgb(28,47,53)',
    forest500: 'rgb(25,43,48)',

    green100: 'rgb(104, 155, 110)',
    green200: 'rgb(86, 141, 89)',
    green300: 'rgb(31, 106, 60)',
    green400: 'rgb(33, 80, 53)',

    navy200: 'rgb(84, 100, 140)',
    navy300: 'rgb(73,85,119)',
    navy400: 'rgb(40,48,66)',
    navy500: 'rgb(39,41,61)',

    grey50: 'rgb(235,236,238)',
    grey100: 'rgb(184, 184, 184)',
    grey200: 'rgb(166, 166, 166)',
    grey300: 'rbg(128, 128, 128)',
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

    // Work
    svgCopperColon: '#FF3465',
    svgCopperText: '#3C3F40',
    svgPriceSpiderLogo: '#0047ff',
    svgPriceSpiderText: '#1b0c75',
  },

  LIGHT: {
    // - Tech
    svgGitLogo: '#ddd',
    svgGitText: '#ddd',
    svgNextJs: '#ddd',
    svgNodeJs: '#ddd',

    // Work
    svgCopperColon: '#ddd',
    svgCopperText: '#ddd',
    svgPriceSpiderLogo: '#ddd',
    svgPriceSpiderText: '#ddd',
    // optional official replacement color: #d3d4e1
  },
};

const colors = {
  background: PALETTE.BOLD.forest400,
  homeBg: PALETTE.BOLD.white300,
  homeBgImage: 'linear-gradient( rgba(243, 243, 243, 0.4), rgba(243, 243, 243, 0) ), url("images/bg/leaves-2.jpg")'
  + ' no-repeat fixed 0 30%',
  homeBgBox: 'rgba(255, 255, 255, 0.9)',

  aboutBg: PALETTE.BOLD.white300,
  aboutHeader: PALETTE.BOLD.navy200,
  aboutText: PALETTE.BOLD.navy500,

  backgroundWork: PALETTE.BOLD.white300,
  backgroundWorkHeader: PALETTE.BOLD.forest400,
  // backgroundWorkJobBox: 'rgba(254, 253, 255, 0.3)',

  backgroundTech: PALETTE.BOLD.white300,
  backgroundTechHeader: PALETTE.BOLD.forest400,
  backgroundTechTools: PALETTE.BOLD.white300,
  backgroundTechToolsHeader: PALETTE.BOLD.forest400,
  // backgroundTechTools: PALETTE.BOLD.forest300,
  // backgroundTechToolsHeader: 'rgb(237,237,236)',

  contactBg: 'linear-gradient( rgba(33, 33, 33, 0.1), rgba(33, 33, 33, 0.2) ), url("images/bg/leaves-4.jpg")'
  + ' no-repeat fixed',
  contactBgBox: 'rgba(244,244,244, 0.68)',
  contactHeader: PALETTE.BOLD.forest400,
  contactSubHeader: PALETTE.BOLD.grey200,
  contactText: PALETTE.BOLD.grey200,
  contactDivider: 'rgba(92, 92, 92, 0.5)',
  contactPlant: PALETTE.BOLD.black,

  footerBg: PALETTE.BOLD.white200,
  footerText: PALETTE.BOLD.forest400,

  heading: PALETTE.BOLD.forest400,

  scrollTrack: PALETTE.BOLD.white200,

  inputBackground: 'rgba(219,220,217, 0.7)',

  accent: PALETTE.BOLD.darkClay,
  // backgroundTech: 'linear-gradient( rgba(220, 220, 220, 0.6), rgba(255, 255, 255, 0.8) ), url("/images/bg/cement.jpg") repeat',

  text: PALETTE.BOLD.forest200,
  primary: PALETTE.BOLD.forest200,
  button: PALETTE.BOLD.forest200,
  buttonHoverText: PALETTE.BOLD.white300,

  // to update
  frame: PALETTE.BOLD.white200,
  frameText: PALETTE.BOLD.forest400,
  frameActiveText: PALETTE.BOLD.white300,
  frameHoverText: PALETTE.BOLD.forest200,
  frameBorder: 'rgba(0, 0, 0, 0.1)',

  ...SVG.DEFAULT,

  modes: {
    dark: {
      background: PALETTE.BOLD.forest400,
      text: PALETTE.BOLD.forest200,
      heading: PALETTE.BOLD.forest200,

      homeBg: 'black',
      homeBgImage: 'black',
      homeBgBox: 'rgba(133, 133, 133, 0.1)',

      aboutBg: PALETTE.BOLD.grey500,
      aboutHeader: PALETTE.BOLD.forest200,
      aboutText: PALETTE.BOLD.grey200,

      backgroundWork: PALETTE.BOLD.black,
      backgroundWorkJobBox: 'rgba(254, 253, 255, 0.3)',

      backgroundTech: PALETTE.BOLD.grey500,
      backgroundTechHeader: PALETTE.BOLD.forest200,
      backgroundTechTools: PALETTE.BOLD.black,
      backgroundTechToolsHeader: PALETTE.BOLD.forest200,

      contactBg: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) ), url("images/bg/leaves-4.jpg")'
      + ' no-repeat fixed',
      contactBgBox: 'rgba(0,0,0,0.83)',
      contactHeader: PALETTE.BOLD.forest200,
      contactSubHeader: PALETTE.BOLD.forest300,
      contactText: PALETTE.BOLD.grey400,
      contactDivider: 'rgba(92, 92, 92, 0.5)',
      contactPlant: PALETTE.BOLD.white300,

      footerBg: PALETTE.BOLD.black,
      footerText: PALETTE.BOLD.grey200,

      scrollTrack: PALETTE.BOLD.white200,
      inputBackground: 'rgba(0,0,0, 0.8)',

      accent: PALETTE.BOLD.darkClay,

      primary: PALETTE.BOLD.forest200,
      button: PALETTE.BOLD.forest200,
      buttonHoverText: PALETTE.BOLD.white,

      // to update
      frame: PALETTE.BOLD.grey500,
      frameText: PALETTE.BOLD.white200,
      frameActiveText: PALETTE.BOLD.white,
      frameHoverText: PALETTE.BOLD.forest200,
      frameBorder: 'rgba(83, 83, 83, 0.1)',

      ...SVG.LIGHT,
    },

    mint: {
      background: '#DFECEB',
      aboutBg: '#EFF9F0',

      inputBackground: 'pink',

      text: '#002629',

      primary: '#4A5859',

      // to update
      frame: '#fafafb',
      frameText: '#233143',
    },
  },
};

export default colors;
