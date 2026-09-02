import THEME_META, { THEME_NAMES } from 'constants/theme';
import { useTheme } from 'theme/ThemeProvider';
import { cn } from 'lib/cn';

function ThemeDropdownList() {
  const { theme, setTheme } = useTheme();

  const listItems = THEME_NAMES.map((themeName, index) => (
    <li
      className="nav-theme-dropdown-list-item mt-4 scale-0
        transition-[transform] duration-[250ms] [transition-timing-function:cubic-bezier(0.42,0.83,0.49,1.35)]"
      style={{ transitionDelay: `${150 * (index + 1)}ms` }}
      key={themeName}
    >
      <button
        type="button"
        className={cn('btn btn-secondary btn-dropdown-theme')}
        data-selected={String(theme === themeName)}
        onClick={() => setTheme(themeName)}
      >
        {THEME_META[themeName].icon}
        <span>{themeName}</span>
      </button>
    </li>
  ));

  return (
    <ol className="absolute top-full right-0 list-none">
      {listItems}
    </ol>
  );
}

export default ThemeDropdownList;
