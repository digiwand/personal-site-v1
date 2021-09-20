import { Image } from 'theme-ui';
import {
  SVGGit,
  SVGNextJS,
  SVGNodeJS,
} from 'components/svg/tech';

const TECH = {
  ALFRED: {
    displayName: 'Alfred for macOS',
    imgElem: <Image alt="Alfred" src="images/tech/alfred@2x.png" variant="tech" />,
    href: 'https://www.alfredapp.com/',
  },
  AMP_EMAIL: {
    displayName: 'AMP Email',
    imgElem: <Image alt="AMP Email" src="svg/tech/amp.svg" variant="tech" />,
    href: 'https://amp.dev/',
  },
  CHAI: {
    displayName: 'Chai',
    imgElem: <Image alt="Chai" src="svg/tech/chai.svg" variant="tech" />,
    href: 'https://www.chaijs.com/',
  },
  CHROME_DEV_TOOLS: {
    displayName: 'Chrome Dev Tools',
    imgElem: <Image alt="Chrome DevTools" src="svg/tech/chromedevtools.svg" variant="tech" />,
    href: 'https://developer.chrome.com/docs/devtools/',
  },
  DASH: {
    displayName: 'Dash for macOS',
    imgElem: <Image alt="Dash" src="images/tech/dash@2x.png" variant="tech" />,
    href: 'https://kapeli.com/dash',
  },
  EMBERJS: {
    displayName: 'Ember.js',
    imgElem: <Image alt="EmberJS" src="svg/tech/emberjs.svg" variant="tech" />,
    href: 'https://emberjs.com/',
  },
  GIT: {
    displayName: 'Git',
    imgElem: <SVGGit sx={{ variant: 'images.tech' }} />,
    href: 'https://git-scm.com/',
  },
  HTML5: {
    displayName: 'HTML5',
    imgElem: <Image alt="HTML5" src="svg/tech/html5.svg" variant="tech" />,
    href: 'https://html.spec.whatwg.org/',
  },
  ITERM2: {
    displayName: 'iTerm2',
    imgElem: <Image alt="iTerm 2" src="svg/tech/iterm2.svg" variant="tech" />,
    href: 'https://iterm2.com/',
  },
  MAC_OS: {
    displayName: 'macOS',
    imgElem: <Image alt="MacOS" src="svg/tech/macos.svg" variant="tech" />,
    href: 'https://support.apple.com/en-us/HT201236',
  },
  MOCHA: {
    displayName: 'Mocha',
    imgElem: <Image alt="Mocha" src="svg/tech/mocha.svg" variant="tech" />,
    href: 'https://mochajs.org/',
  },
  NEXTJS: {
    displayName: 'Next.js',
    imgElem: <SVGNextJS sx={{ variant: 'images.tech' }} />,
    href: 'https://nextjs.org/',
  },
  NODEJS: {
    displayName: 'Node.js',
    imgElem: <SVGNodeJS sx={{ variant: 'images.tech' }} />,
    href: 'https://nodejs.org/en/',
  },
  REACTJS: {
    displayName: 'React',
    imgElem: <Image alt="ReactJS" src="svg/tech/reactjs.svg" variant="tech" />,
    href: 'https://reactjs.org/',
  },
  SASS: {
    displayName: 'Sass',
    imgElem: <Image alt="SASS" src="svg/tech/sass.svg" variant="tech" />,
    href: 'https://sass-lang.com/',
  },
  VS_CODE: {
    displayName: 'VS Code',
    imgElem: <Image alt="VS Code" src="svg/tech/vscode.svg" variant="tech" />,
    href: 'https://code.visualstudio.com/',
  },
};

export default TECH;
