import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  DEFAULT_THEME,
  THEME_NAMES,
  themes,
  type ThemeName,
  type ThemeTokens,
} from 'styles/theme/colors';
import {
  generateThemeCss,
  LEGACY_THEME_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from 'styles/theme/css-vars';

const themeCss = generateThemeCss();

type ThemeContextValue = {
  theme: ThemeName;
  colors: ThemeTokens;
  setTheme: (name: ThemeName) => void;
  setNextTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isThemeName(value: string | null): value is ThemeName {
  return Boolean(value && value in themes);
}

function readStoredTheme(): ThemeName {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME;
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      ?? window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
    return isThemeName(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function applyTheme(name: ThemeName) {
  document.documentElement.dataset.theme = name;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  const setTheme = useCallback((name: ThemeName) => {
    setThemeState(name);
    applyTheme(name);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, name);
    } catch {
      // Ignore private-mode / blocked storage.
    }
  }, []);

  const setNextTheme = useCallback(() => {
    const currentIndex = THEME_NAMES.indexOf(theme);
    const nextIndex = currentIndex < THEME_NAMES.length - 1 ? currentIndex + 1 : 0;
    setTheme(THEME_NAMES[nextIndex]);
  }, [setTheme, theme]);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    colors: themes[theme],
    setTheme,
    setNextTheme,
  }), [setNextTheme, setTheme, theme]);

  return (
    <ThemeContext.Provider value={value}>
      <style id="theme-tokens">{themeCss}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
