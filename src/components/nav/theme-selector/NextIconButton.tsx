import {
  IconButton,
  useColorMode,
} from 'theme-ui';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

function ThemeNextIconButton() {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKeys = Object.keys(THEMEUI_COLOR_MODE_CONFIG);

  if (!colorMode) {
    // assume default light mode
    setColorMode('light');
  }

  function selectNextColor() {
    const currentColorModeIndex = colorModeKeys.findIndex((value) => value === colorMode);
    const nextColorModeIndex = currentColorModeIndex < colorModeKeys.length - 1 ? currentColorModeIndex + 1 : 0;

    setColorMode(colorModeKeys[nextColorModeIndex]);
  }

  return (
    <IconButton
      onClick={() => selectNextColor()}
      sx={{
        variant: 'buttons.icon.secondary',
      }}
    >
      {THEMEUI_COLOR_MODE_CONFIG[colorMode || 'light'].icon}
    </IconButton>
  );
}

export default ThemeNextIconButton;
