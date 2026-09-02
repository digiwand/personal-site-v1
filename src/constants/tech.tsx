import {
  SVGGit,
  SVGNextJS,
  SVGNodeJS,
} from 'components/svg/tech';

const TECH = {
  AB_TESTING: {
    displayName: 'A/B Testing',
    href: 'https://www.wikiwand.com/en/A/B_testing',
  },
  ALFRED: {
    displayName: 'Alfred for macOS',
    href: 'https://www.alfredapp.com/',
    imgElem: (
      <picture>
        <source srcSet="/images/tech/alfred@2x.webp 2x" type="image/webp" />
        <source srcSet="/images/tech/alfred@2x.png 2x" type="image/png" />
        <img className="img-tech" alt="Alfred" src="/images/tech/alfred@2x.png" height="48rem" width="58rem" />
      </picture>
    ),
  },
  ANGULARJS: {
    displayName: 'AngularJS 1.x',
    href: 'https://angularjs.org/',
  },
  AMP_EMAIL: {
    displayName: 'AMP Email',
    href: 'https://amp.dev/',
    imgElem: <img className="img-tech" alt="AMP Email" src="svg/tech/amp.svg" height="48rem" width="48rem" />,
  },
  ASP_NET: {
    displayName: 'ASP.NET',
    href: 'https://dotnet.microsoft.com/apps/aspnet',
  },
  CHAI: {
    displayName: 'Chai',
    href: 'https://www.chaijs.com/',
    imgElem: <img className="img-tech" alt="Chai" src="svg/tech/chai.svg" height="48rem" width="41.5" />,
  },
  CHROME_DEV_TOOLS: {
    displayName: 'Chrome Dev Tools',
    href: 'https://developer.chrome.com/docs/devtools/',
    imgElem: <img className="img-tech" alt="Chrome DevTools" src="svg/tech/chromedevtools.svg" height="48rem" width="48rem" />,
  },
  CHROME_EXT: {
    displayName: 'Chrome Extensions',
    href: 'https://developer.chrome.com/docs/extensions/reference/',
  },
  CSHARP: {
    displayName: 'C#',
    href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  CSS3: {
    displayName: 'CSS / CSS3',
    href: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  DASH: {
    displayName: 'Dash for macOS',
    href: 'https://kapeli.com/dash',
    imgElem: (
      <picture>
        <source srcSet="/images/tech/dash@2x.webp 2x" type="image/webp" />
        <source srcSet="/images/tech/dash@2x.png 2x" type="image/png" />
        <img className="img-tech" alt="Dash" src="/images/tech/dash@2x.png" height="48rem" width="48rem" />
      </picture>
    ),
  },
  DOCUMENTATION: {
    displayName: 'Documentation',
    href: 'https://www.atlassian.com/software/confluence',
  },
  EIP: {
    displayName: 'EIP',
    href: 'https://eips.ethereum.org/',
  },
  EMBERJS: {
    displayName: 'Ember.js',
    href: 'https://emberjs.com/',
    imgElem: <img className="img-tech" alt="EmberJS" src="svg/tech/emberjs.svg" height="48rem" width="99.59rem" />,
  },
  ETHEREUM: {
    displayName: 'Ethereum',
    href: 'https://ethereum.org/en/',
  },
  EXPRESSJS: {
    displayName: 'Express.js',
    href: 'https://expressjs.com/',
  },
  GIT: {
    displayName: 'Git',
    href: 'https://git-scm.com/',
    imgElem: <SVGGit className="img-tech" />,
  },
  GOOGLE_WEB_DESIGNER: {
    displayName: 'Google Web Designer',
    href: 'https://webdesigner.withgoogle.com/',
  },
  GOOGLE_ADD_ON: {
    displayName: 'Google Workspace Add-ons',
    href: 'https://developers.google.com/workspace/add-ons/overview',
  },
  HANDLEBARS: {
    displayName: 'Handlebars',
    href: 'https://handlebarsjs.com/',
  },
  HEAP: {
    displayName: 'Heap Analytics',
    href: 'https://heap.io/',
  },
  JAVASCRIPT: {
    displayName: 'JavaScript',
    href: 'https://www.javascript.com/',
  },
  JIRA: {
    displayName: 'JIRA',
    href: 'https://www.atlassian.com/software/jira',
  },
  PENDO: {
    displayName: 'Pendo',
    href: 'https://www.pendo.io/',
  },
  HIGHCHARTS: {
    displayName: 'Highcharts',
    href: 'https://www.highcharts.com/',
  },
  HTML5: {
    displayName: 'HTML5',
    href: 'https://html.spec.whatwg.org/',
    imgElem: <img className="img-tech" alt="HTML5" src="svg/tech/html5.svg" height="48rem" width="48rem" />,
  },
  INTELLI_J: {
    displayName: 'IntelliJ IDEA',
    href: 'https://www.jetbrains.com/idea/',
  },
  ITERM2: {
    displayName: 'iTerm2',
    href: 'https://iterm2.com/',
    imgElem: <img className="img-tech" alt="iTerm 2" src="svg/tech/iterm2.svg" height="48rem" width="48rem" />,
  },
  JEST: {
    displayName: 'Jest',
    href: 'https://jestjs.io/',
  },
  MAC_OS: {
    displayName: 'macOS',
    href: 'https://support.apple.com/en-us/HT201236',
    imgElem: <img className="img-tech" alt="MacOS" src="svg/tech/macos.svg" height="48rem" width="48.3rem" />,
  },
  MOCHA: {
    displayName: 'Mocha',
    href: 'https://mochajs.org/',
    imgElem: <img className="img-tech" alt="Mocha" src="svg/tech/mocha.svg" height="48rem" width="48rem" />,
  },
  MONGODB: {
    displayName: 'MongoDB',
    href: 'https://www.mongodb.com/',
  },
  NEXTJS: {
    displayName: 'Next.js',
    href: 'https://nextjs.org/',
    imgElem: <SVGNextJS className="img-tech" />,
  },
  NODEJS: {
    displayName: 'Node.js',
    href: 'https://nodejs.org/en/',
    imgElem: <SVGNodeJS className="img-tech" />,
  },
  POSTGRESQL: {
    displayName: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
  },
  REACTJS: {
    displayName: 'React',
    href: 'https://reactjs.org/',
    imgElem: <img className="img-tech" alt="ReactJS" src="svg/tech/reactjs.svg" height="48rem" width="67.88rem" />,
  },
  REGEX: {
    displayName: 'Regex',
    href: 'https://en.wikipedia.org/wiki/Regular_expression',
  },
  SASS: {
    displayName: 'Sass',
    href: 'https://sass-lang.com/',
    imgElem: <img className="img-tech" alt="SASS" src="svg/tech/sass.svg" height="48rem" width="64rem" />,
  },
  SELENIUM: {
    displayName: 'Selenium',
    href: 'https://www.selenium.dev/',
  },
  SENTRY: {
    displayName: 'Sentry',
    href: 'https://sentry.io/',
  },
  STORYBOOK: {
    displayName: 'Storybook',
    href: 'https://storybook.js.org/',
  },
  VS_CODE: {
    displayName: 'VS Code',
    href: 'https://code.visualstudio.com/',
    imgElem: <img className="img-tech" alt="VS Code" src="svg/tech/vscode.svg" height="48rem" width="48rem" />,
  },
};

export default TECH;
