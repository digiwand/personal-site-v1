import { IconButton, useColorMode, useThemeUI } from 'theme-ui';

// @fixme clean: Use IconButtonWrapped if we want to use lighten
// import IconButtonWrapped from 'components/common/IconButtonWrapped';

import IconBrightness4 from 'components/svg/material-icons/brightness4';
import IconBrightnessHigh from 'components/svg/material-icons/brightnessHigh';

export default function ThemeSelector() {
  const [colorMode, setColorMode] = useColorMode();
  const { theme: { rawColors } } = useThemeUI();

  const buttons = Object.entries(rawColors?.modes).map(([mode]) => (
    <IconButton
      sx={{
        variant: 'buttons.icon.secondary',
        mt: 3,
      }}
      key={mode}
      isSelected={colorMode === mode}
      onClick={() => setColorMode(mode)}
    >
      {mode === 'light'
        ? <IconBrightnessHigh />
        : <IconBrightness4 />}
    </IconButton>
  ));

  return (
    <div sx={{
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      bottom: '0',
      right: '0',
      mr: 4,
      mb: 4,
    }}
    >
      {buttons}
    </div>
  );
}
