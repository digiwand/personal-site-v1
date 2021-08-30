import { useColorMode } from 'theme-ui';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

function ThemeDropdownList() {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKeys = Object.keys(THEMEUI_COLOR_MODE_CONFIG);

  function selectColor(color) {
    setColorMode(color);
  }

  const listItems = colorModeKeys.map((colorModeKey, index) => (
    <li
      className="NavHeader-ThemeDropdownList_listItem"
      key={colorModeKey}
      sx={{
        mt: 1,
        transition: '250ms cubic-bezier(0.42, 0.83, 0.49, 1.35) transform',
        transform: 'scale(0)',
        transitionDelay: `${150 * (index + 1)}ms`,
      }}
    >
      <button
        type="button"
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          borderRadius: '8rem',
          px: 3,
          py: 2,
          background: (t) => t.colors.background,
          border: (t) => `1px solid ${t.colors.text}`,
          minWidth: '90rem',
          minHeight: '40rem',
          textAlign: 'left',
          transition: '250ms ease all',
          textTransform: 'capitalize',

          '&:hover': {
            border: (t) => `1px solid ${t.colors.accent}`,
          },
          '&:focus': {
            border: (t) => `1px solid ${t.colors.accent}`,
          },
          '&:focusWithin': {
            border: (t) => `1px solid ${t.colors.accent}`,
          },

          '> svg': {
            width: '24rem',
            height: '24rem',
            mr: 2,
          },
        }}
        is-selected={String(colorMode === colorModeKey)}
        onClick={() => selectColor(colorModeKey)}
      >
        {THEMEUI_COLOR_MODE_CONFIG[colorModeKey].icon}
        {colorModeKey}
      </button>
    </li>
  ));

  return (
    <ol
      sx={{
        position: 'absolute',
        top: '100%',
        right: '0',
        listStyle: 'none',
        visibility: 'hidden',
      }}
    >
      {listItems}
    </ol>
  );
}

export default ThemeDropdownList;
