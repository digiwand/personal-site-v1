import {
  IconButton,
  useColorMode,
} from 'theme-ui';

import ThemeDropdownList from 'components/nav/ThemeDropdownList';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

function ThemeSelector() {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKeys = Object.keys(THEMEUI_COLOR_MODE_CONFIG);

  function selectNextColor() {
    const currentColorModeIndex = colorModeKeys.findIndex((value) => value === colorMode);
    const nextColorModeIndex = currentColorModeIndex < colorModeKeys.length - 1 ? currentColorModeIndex + 1 : 0;

    setColorMode(colorModeKeys[nextColorModeIndex]);
  }

  return (
    <div sx={{
      position: 'relative',
      ml: 3,

      '&:hover ol': {
        visibility: 'visible',
        '.ThemeDropdownList_listItem': {
          transform: 'scale(1)',
        },
      },
      '&:not(:hover) ol .ThemeDropdownList_listItem': {
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

export default ThemeSelector;
