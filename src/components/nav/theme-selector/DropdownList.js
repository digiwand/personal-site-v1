import { useColorMode, Button } from 'theme-ui';
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
      <Button
        sx={(t) => ({
          variant: 'buttons.secondary',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          minWidth: '108rem',

          '> svg': {
            width: '24rem',
            height: '24rem',
            mr: 2,

            '> path': {
              fill: t.colors.buttonText,
            },
            '&:hover > path': {
              fill: t.colors.buttonHoverText,
            },
          },
        })}
        is-selected={String(colorMode === colorModeKey)}
        onClick={() => selectColor(colorModeKey)}
      >
        {THEMEUI_COLOR_MODE_CONFIG[colorModeKey].icon}
        <span>{colorModeKey}</span>
      </Button>
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
