import THEME_META from 'constants/theme';
import { useTheme } from 'theme/ThemeProvider';

function ThemeNextIconButton() {
  const { theme, setNextTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={setNextTheme}
      className="btn-icon btn-icon-secondary flex justify-self-center"
    >
      {THEME_META[theme].icon}
    </button>
  );
}

export default ThemeNextIconButton;
