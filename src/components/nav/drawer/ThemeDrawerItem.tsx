import { useEffect } from 'react';
import THEME_META from 'constants/theme';
import { useTheme } from 'theme/ThemeProvider';

function ThemeNavDrawerItem({ handleCloseMenu }: { handleCloseMenu(): void}) {
  const { theme, setTheme, setNextTheme } = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme('light');
    }
  });

  return (
    <button
      type="button"
      onClick={() => {
        setNextTheme();
        handleCloseMenu();
      }}
      className="nav-theme-item"
    >
      <div
        className="NavDrawer-ThemeDrawerItem_text nav-theme-item-label theme-item-fade-init
          relative flex justify-center"
      >
        {THEME_META[theme || 'light'].icon}
        <span className="pl-32">
          Change Theme
        </span>
      </div>
    </button>
  );
}

export default ThemeNavDrawerItem;
