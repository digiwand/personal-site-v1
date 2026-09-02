import { useEffect } from 'react';
import THEME_META from 'constants/theme';
import { useTheme } from 'theme/ThemeProvider';

function ThemeNextIconButton() {
  const { theme, setTheme, setNextTheme } = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme('light');
    }
  });

  return (
    <button
      type="button"
      onClick={setNextTheme}
      className="btn-icon btn-icon-secondary"
    >
      {THEME_META[theme || 'light'].icon}
    </button>
  );
}

export default ThemeNextIconButton;
