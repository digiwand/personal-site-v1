const PALETTE = {
  BOLD: {
    black: 'rgb(0, 0, 0)',
    clay: 'rgb(193,175,159)',
    darkForest: 'rgb(28,47,53)',
    darkClay: 'rgb(175,131,109)',
    forest: 'rgb(81, 115, 105)',
    grey: 'rgb(166, 166, 166)',
    darkGrey: 'rgb(92, 92, 92)',
    grayGradient: 'linear-gradient(rgba(133, 133, 133, 1), rgba(255, 255, 255,1 ))',
    offWhite: 'rgb(237,237,236)',
    white: 'rgb(254, 253, 255)',
  },
};

const colors = {
  background: PALETTE.BOLD.darkForest,
  backgroundHome: PALETTE.BOLD.offWhite,

  backgroundAbout: PALETTE.BOLD.darkForest,
  backgroundAboutHeader: PALETTE.BOLD.forest,
  backgroundAboutText: PALETTE.BOLD.offWhite,

  backgroundWork: PALETTE.BOLD.white,
  backgroundWorkJobBox: 'rgba(254, 253, 255, 0.3)',

  backgroundTech: PALETTE.BOLD.grey,
  backgroundTechHeader: PALETTE.BOLD.offWhite,
  backgroundTechTools: PALETTE.BOLD.darkForest,
  backgroundTechToolsHeader: 'rgb(237,237,236)',

  backgroundContactHeader: PALETTE.BOLD.darkForest,
  backgroundContactSubHeader: PALETTE.BOLD.darkGrey,
  backgroundContactText: PALETTE.BOLD.darkGrey,
  backgroundContactDivider: 'rgba(92, 92, 92, 0.5)',
  backgroundContactPlant: PALETTE.BOLD.black,

  backgroundFooter: PALETTE.BOLD.black,
  backgroundFooterText: PALETTE.BOLD.grey,

  inputBackground: 'rgba(219,220,217, 0.7)',

  accent: PALETTE.BOLD.darkClay,
  // backgroundTech: 'linear-gradient( rgba(220, 220, 220, 0.6), rgba(255, 255, 255, 0.8) ), url("/images/bg/cement.jpg") repeat',

  text: PALETTE.BOLD.forest,
  primary: PALETTE.BOLD.forest,
  button: PALETTE.BOLD.forest,
  buttonHoverText: PALETTE.BOLD.white,

  // to update
  frame: PALETTE.BOLD.offWhite,
  frameText: PALETTE.BOLD.darkForest,

  // SVG - Tech
  svgGitLogo: '#2F2707',
  svgGitText: '#DE4C36',
  svgNextJs: '#000',
  svgNodeJs: '#333',

  // SVG - Work
  svgCopperColon: '#FF3465',
  svgCopperText: '#3C3F40',
  svgPriceSpiderLogo: '#0047ff',
  svgPriceSpiderText: '#1b0c75',

  modes: {
    dark: {
      background: '#222739',
      backgroundAbout: '#EFF9F0',

      inputBackground: '#333',

      // need to refactor bottom

      text: '#F0F5F9',

      primary: '#546CBB',

      accent: '#6699CC',

      // to update
      frame: '#fafafb',
      frameText: '#233143',

      // SVG - Tech
      svgGitLogo: '#fff',
      svgGitText: '#fff',
      svgNextJs: '#fff',
      svgNodeJs: '#fff',

      // SVG - Work
      svgCopperColon: '#fff',
      svgCopperText: '#fff',
      // optional official replacement color: #d3d4e1
      svgPriceSpiderLogo: '#fff',
      svgPriceSpiderText: '#fff',
    },

    mint: {
      background: '#DFECEB',
      backgroundAbout: '#EFF9F0',

      inputBackground: 'pink',

      text: '#002629',

      primary: '#4A5859',

      // to update
      frame: '#fafafb',
      frameText: '#233143',

      // SVG - Tech
      svgGitLogo: '#2F2707',
      svgGitText: '#DE4C36',
      svgNextJs: '#000',
      svgNodeJs: '#333',

      // SVG - Work
      svgCopperColon: '#FF3465',
      svgCopperText: '#3C3F40',
      svgPriceSpiderLogo: '#0047ff',
      svgPriceSpiderText: '#1b0c75',
    },
  },
};

export default colors;
