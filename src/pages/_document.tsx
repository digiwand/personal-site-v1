import {
  Head, Html, Main, NextScript,
} from 'next/document';

import { DEFAULT_THEME } from 'styles/theme/colors';
import {
  generateThemeCss,
  LEGACY_THEME_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from 'styles/theme/css-vars';

const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})||localStorage.getItem(${JSON.stringify(LEGACY_THEME_STORAGE_KEY)});if(t){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en" data-theme={DEFAULT_THEME}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style id="theme-tokens" dangerouslySetInnerHTML={{ __html: generateThemeCss() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
