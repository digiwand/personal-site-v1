import { DEFAULT_THEME, themes, type ThemeName, type ThemeTokens } from './colors';

export const THEME_STORAGE_KEY = 'theme';
export const LEGACY_THEME_STORAGE_KEY = 'theme-ui-color-mode';

function toKebab(value: string) {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

export function tokenVar(name: keyof ThemeTokens) {
  return `var(--theme-${toKebab(name)})`;
}

function tokensToDeclarations(tokens: ThemeTokens) {
  return Object.entries(tokens)
    .map(([key, value]) => `  --theme-${toKebab(key)}: ${value};`)
    .join('\n');
}

export function generateThemeCss() {
  return (Object.entries(themes) as [ThemeName, ThemeTokens][])
    .map(([name, tokens]) => {
      const selector = name === DEFAULT_THEME
        ? `:root, [data-theme="${name}"]`
        : `[data-theme="${name}"]`;
      return `${selector} {\n${tokensToDeclarations(tokens)}\n}`;
    })
    .join('\n\n');
}
