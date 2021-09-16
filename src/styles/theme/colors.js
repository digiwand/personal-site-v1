/* eslint-disable no-multi-spaces */

/** Names are based off of generated names by https://coolors.co */
const RGB = {
  // White
  cultured: '239, 240, 241',                    // #EFF0F1
  floralWhite: '255,250,240',                   // #FFFAF0

  // Grey
  davysGrey: '83, 83, 89',                      // #585862
  gainsboro: '219, 220, 217',                   // #DBDCD9
  platinum: '232, 232, 232',                    // #E8E8E8

  // Black
  xiketic: '15, 14, 34',                        // #0F0E18

  // Red
  upsdellRed: '176, 0, 32',                     // #B00020

  // Orange
  brightYellowCrayola: '255, 178, 55',
  chromeYellow: '255, 170, 11',                // #FFAA0B
  macaroniAndCheese: '252, 184, 131',          // #FCB883
  orangeYellowCrayola: '255, 217, 114',        // #FFD972
  // saffron: '249, 198, 32',                  // #F9C620

  // Yellow
  bananaMania: '251, 233, 177',                // #FBE9B1
  // corn: '255, 237, 80',                     // #FFED50
  yellowCrayola: '255, 237, 131',              // #FFED83
  selectiveYellow: '255, 185, 11',             // #FFB90B

  // Green
  // magicMint: '170, 237, 212',               // #AAEDD4
  // mountainMeadow: '0, 184, 131',            // #00B883

  // BlueGreen
  maximumBlueGreen: '0, 185, 196',            // #00B9C4
  metallicSeaweed: '50, 126, 133',            // #327E85

  // Blue
  celeste: '155, 243, 251',                   // #9BF3FB
  // cornflowerBlue '120, 157, 247',          // #789DF7
  paleCerulean: '162, 196, 226',              // #a2c4e2
  middleBlue: '117, 192 , 202',               // #75C0CA
  picoteeBlue: '31, 38, 135',                 // #1F2687
  // prussianBlue: '13, 50, 77',              // #0D324D

  // Purple
  byzantine: '171, 75, 162',                  // #AB4BA2 - dark and almost pink
  darkSlateBlue: '71, 60, 139',               // #473C8B
  mediumPurple: '143, 112, 211',              // #8F70D3
  royalPurple: '103, 82, 170',                // #6752AA - darker one = #65559A
  purpleMountainMajesty: '143, 121, 183',     // #8F79B7
  royalPurple_pinkish: '120, 75, 155',        // #784B9B - darker one = #65559A - deprecate?
  russianViolet: '51, 31, 80',                // #331F50 - can we deprecate these near black purple?
  spaceCadet: '58, 54, 90',                   // #3A365A - dark purple / grey
  darkPurple: '19, 18, 42',                   // #13122A

  // Pink
  // lightPink: '255, 178, 180',              // #FFB2B4
  fandango: '171, 60, 139',                   // #AB3C8B - close to byzantine. deprecate byzantine?
  mauve: '249, 198, 250',                     // #F9C6FA
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

const colors = {

  // -- Defaults -----------------------------------------------------------------------------------

  background: `rgb(${RGB.bananaMania})`,
  text: 'floralwhite',

  // -- General -----------------------------------------------------------------------------------

  backgroundMain: `linear-gradient(127deg, rgba(${RGB.royalPurple}, 0.9), rgba(${RGB.royalPurple}, 0.2) 70.71%),`
    + `linear-gradient(217deg, rgba(${RGB.brightYellowCrayola}, 0.8), rgba(${RGB.brightYellowCrayola}, 0) 70.71%),`
    + `linear-gradient(336deg, rgba(${RGB.celeste}, 0.9), rgba(${RGB.celeste}, 1) 70.71%)`,

  glassBg: 'linear-gradient(70deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.30))',
  glassBorder: '1px solid rgba(255, 255, 255, 0.18)',

  error: `rgb(${RGB.upsdellRed})`,
  link: `rgb(${RGB.yellowCrayola})`,
  linkHover: `rgb(${RGB.chromeYellow})`,

  // heading: '#fff',

  scrollTrack: 'rgba(255, 255, 255, 0.1)',
  scrollThumb: 'rgba(255, 255, 255, 0.6)',
  scrollThumbHover: `rgba(${RGB.mauve}, 0.6)`,

  /** @todo: delete or add back in */
  textGradient: `linear-gradient(45deg, rgba(${RGB.mauve}, 0.8),`
    + ` rgba(${RGB.bananaMania}, 0.8), rgba(${RGB.middleBlue}, 0.9))`,
  textGradientBackup: `rgb(${RGB.royalPurple})`,
  textShadow: `0.07em 0.08em 0.05em rgba(${RGB.purpleMountainMajesty}, 0.75)`,

  ...SVG.DEFAULT,

  // -- Components --------------------------------------------------------------------------------

  buttonBoxShadow: `0 4px 8px 0 rgba(${RGB.picoteeBlue}, 0.17)`,
  buttonBg: `linear-gradient(70deg, rgba(${RGB.royalPurple}, 0.50), rgba(${RGB.royalPurple}, 0.70))`,
  buttonBorder: `1rem solid rgba(${RGB.royalPurple}, 0.18)`,
  buttonHoverText: `rgb(${RGB.cultured})`,
  buttonSecondaryBg: 'linear-gradient(40deg,'
    + ` rgba(${RGB.chromeYellow}, 0.85), rgba(${RGB.yellowCrayola}, 0.4), rgba(${RGB.chromeYellow}, 0.85))`,
  buttonSecondaryBorder: `1rem solid rgba(${RGB.selectiveYellow}, 0.18)`,
  buttonText: '#fff',

  frameBorder: 'rgba(0, 0, 0, 0.1)',
  frameHoverText: `rgba(${RGB.royalPurple}, 0.8)`,
  frameText: '#fff',

  footerBg: `rgba(${RGB.royalPurple_pinkish}, 0.65)`,
  footerText: '#fff',

  navDrawerActiveColor: `rgba(${RGB.yellowCrayola}, 0.9)`,
  navDrawerBg: `linear-gradient(70deg, rgba(${RGB.royalPurple}, 0.55), rgba(${RGB.royalPurple}, 0.73))`,
  navDrawerSocialIconsHoverColor: `rgba(${RGB.macaroniAndCheese}, 0.85)`,
  navHeaderBg: `rgba(${RGB.byzantine}, 0.35)`,
  navHeaderLogoBgImage: (t) => `linear-gradient(45deg, ${t.colors.text}, pink)`,
  navHeaderLogoBgImageScrolled: `linear-gradient(45deg, rgb(${RGB.mauve}), lavender, orange)`,
  navTabHoverColor: 'orange',

  // -- Sections ----------------------------------------------------------------------------------

  homeHello: 'rgba(255,255,255, 0.9)',

  techBg: `rgb(${RGB.paleCerulean})`,
  carouselItemBg: `rgba(${RGB.paleCerulean}, 0.9)`,

  workHeader: 'floralwhite',
  workSubHeader: 'floralwhite',

  contactSubHeader: 'floralwhite',
  contactText: 'floralwhite',
  contactIcon: `rgba(${RGB.platinum}, 0.8)`,
  contactDivider: `rgba(${RGB.platinum}, 0.5)`,
  contactPlant: `rgba(${RGB.platinum}, 0.8)`,
  contactReCaptcha: `rgba(${RGB.purpleMountainMajesty}, 0.9)`,

  inputBg: 'rgba(255, 255, 255, 0.25)',
  inputAutofill: `rgba(${RGB.gainsboro}, 0.9)`,

  modes: {
    dark: {

      // -- Defaults -----------------------------------------------------------------------------------

      background: `rgb(${RGB.xiketic})`,

      // -- General -------------------------------------------------------------------------------

      backgroundMain: `radial-gradient(circle at 4% 0%, rgba(${RGB.middleBlue}, 0.3), transparent 23%),`
      + `radial-gradient(circle at 59% -16%, rgba(${RGB.royalPurple}, 0.5), transparent 21%),`
      + `radial-gradient(circle at top right, rgba(${RGB.royalPurple}, 0.5), transparent 18%),`
      + `radial-gradient(circle at 0% 40%, rgba(${RGB.orangeYellowCrayola}, 0.08), transparent 10%),`
      + `radial-gradient(circle at 100% 87%, rgba(${RGB.orangeYellowCrayola}, 0.08), transparent 8%),`
      + `radial-gradient(circle at -5% 85%, rgba(${RGB.darkSlateBlue}, 0.8), transparent 33%),`
      + `radial-gradient(closest-corner at 65% 60%, rgba(${RGB.darkSlateBlue}, 0.8), transparent 85%),`
      + `radial-gradient(closest-corner at 75% 75%, rgba(${RGB.fandango}, 0.3), transparent 46%)`,

      glassBg: `linear-gradient(70deg, rgba(${RGB.davysGrey}, 0.18), rgba(${RGB.davysGrey}, 0.35))`,
      glassBorder: '1rem solid rgba(120, 120, 120, 0.18)',

      /** @todo: add link color */
      linkHover: `rgb(${RGB.maximumBlueGreen})`,

      heading: 'white',

      scrollTrack: 'rgba(120, 120, 120, 0.1)',
      scrollThumb: 'rgba(250, 250, 250, 0.6)',
      scrollThumbHover: `rgba(${RGB.celeste}, 0.6)`,

      // textGradient: 'linear-gradient(45deg, #efefef 30%, #fff)',
      // textGradientBackup: `rgb(${RGB.royalPurple})`,
      textShadow: `0.07em 0.08em 0.05em rgba(${RGB.spaceCadet}, 0.75)`,

      ...SVG.LIGHT,

      // -- Components -----------------------xf-----------------------------------------------------

      buttonBoxShadow: `0 4px 8px 0 rgba(${RGB.picoteeBlue}, 0.17)`,
      buttonBg: `linear-gradient(70deg, rgba(${RGB.middleBlue}, 0.50), rgba(${RGB.middleBlue}, 0.70))`,
      buttonBorder: `1rem solid rgba(${RGB.middleBlue}, 0.18)`,
      buttonHoverText: `rgb(${RGB.cultured})`,
      buttonSecondaryBg: `linear-gradient(40deg, rgba(${RGB.metallicSeaweed}, 0.85), `
        + `rgba(${RGB.celeste}, 0.70), rgba(${RGB.metallicSeaweed}, 0.85))`,
      buttonSecondaryBorder: `1rem solid rgba(${RGB.selectiveYellow}, 0.18)`,
      buttonText: 'white',

      frameBorder: `rgba(${RGB.davysGrey}, 0.1)`,
      frameHoverText: `rgba(${RGB.royalPurple}, 0.8)`,
      frameText: 'white',

      footerBg: `rgba(${RGB.darkPurple}, 0.95)`,
      footerText: 'white',

      navDrawerActiveColor: `rgba(${RGB.middleBlue}, 0.9)`,
      navDrawerBg: `linear-gradient(70deg, rgba(${RGB.darkPurple}, 0.55), rgba(33, 33, 33, 0.73))`,
      navDrawerSocialIconsHoverColor: `rgba(${RGB.middleBlue}, 0.9)`,
      navHeaderBg: `rgba(${RGB.darkPurple}, 0.95)`,
      navHeaderLogoBgImage: (t) => t.colors.text,
      navHeaderLogoBgImageScrolled: `linear-gradient(45deg, rgb(${RGB.mauve}), rgb(${RGB.middleBlue}), orange)`,
      navTabHoverColor: `rgb(${RGB.metallicSeaweed})`,

      // -- Sections ------------------------------------------------------------------------------

      techBg: `rgb(${RGB.darkPurple})`,
      carouselItemBg: `rgba(${RGB.darkPurple}, 0.9)`,

      contactDivider: `rgba(${RGB.davysGrey}, 0.5)`,
      contactPlant: 'rgba(190, 190, 190, 0.8)',
      contactReCaptcha: `rgba(${RGB.platinum}, 0.52)`,

      inputBg: `rgba(${RGB.spaceCadet}, 0.6)`,
      inputAutofill: `rgba(${RGB.darkSlateBlue}, 0.8)`,
    },

    mint: {
      // background: '#DFECEB',

      // inputBg: 'pink',

      // text: '#002629',

      // // to update
      // frame: '#fafafb',
      // frameText: '#233143',
    },
  },
};

export default colors;
