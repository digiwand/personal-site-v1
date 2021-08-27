import {
  IconButton,
  useColorMode,
} from 'theme-ui';

import ThemeDropdownList from 'components/nav/navHeader/ThemeDropdownList';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

function NavHeaderThemeDropdown() {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKeys = Object.keys(THEMEUI_COLOR_MODE_CONFIG);

  function selectNextColor() {
    const currentColorModeIndex = colorModeKeys.findIndex((value) => value === colorMode);
    const nextColorModeIndex = currentColorModeIndex < colorModeKeys.length - 1 ? currentColorModeIndex + 1 : 0;

    setColorMode(colorModeKeys[nextColorModeIndex]);
  }

  return (
    <div
      className="NavHeader_ThemeDropdown"
      sx={{
        position: 'relative',
        ml: 3,

        '&:hover ol': {
          visibility: 'visible',
          '.NavHeader-ThemeDropdownList_listItem': {
            transform: 'scale(1)',
          },
        },
        '&:not(:hover) ol .NavHeader-ThemeDropdownList_listItem': {
          transitionDelay: '150ms',
        },
      }}
    >
      <IconButton
        sx={{
          variant: 'buttons.icon.primary',
        }}
        onClick={() => selectNextColor()}
      >
        {THEMEUI_COLOR_MODE_CONFIG[colorMode].icon}
      </IconButton>

      <ThemeDropdownList />
    </div>
  );
}

export default NavHeaderThemeDropdown;
