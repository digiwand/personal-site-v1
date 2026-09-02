import {
  Head, Html, Main, NextScript,
} from 'next/document';

import { DEFAULT_THEME } from 'styles/theme/colors';
import {
  generateThemeCss,
  LEGACY_THEME_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from 'styles/theme/css-vars';

const SCRIPT_ESCAPE_MAP: Record<string, string> = {
  '<': '\\u003C',
  '>': '\\u003E',
  '/': '\\u002F',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\0': '\\0',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

const escapeUnsafeScriptChars = (value: string): string => value.replace(
  /[<>\/\\\b\f\n\r\t\0\u2028\u2029]/g,
  (ch) => SCRIPT_ESCAPE_MAP[ch] ?? ch,
);

const safeThemeStorageKey = escapeUnsafeScriptChars(JSON.stringify(THEME_STORAGE_KEY));
const safeLegacyThemeStorageKey = escapeUnsafeScriptChars(JSON.stringify(LEGACY_THEME_STORAGE_KEY));

const themeInitScript = `(function(){try{var t=localStorage.getItem(${safeThemeStorageKey})||localStorage.getItem(${safeLegacyThemeStorageKey});if(t){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

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
