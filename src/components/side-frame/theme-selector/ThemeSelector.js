import { IconButton, useColorMode, useThemeUI } from 'theme-ui';

import IconBrightness4 from 'components/svg/material-icons/brightness4';
import IconBrightnessHigh from 'components/svg/material-icons/brightnessHigh';

export default function ThemeSelector ({ props }) {
  const { theme: { rawColors } } = useThemeUI();
  const [colorMode, setColorMode] = useColorMode();

  const buttons = Object.entries(rawColors?.modes).map(([mode, values]) => 
    <IconButton
      sx={(theme) => ({ 
        bg: theme.rawColors.modes?.bg,
        color: theme.rawColors.modes?.text,
      })}
      key={mode}
      isSelected={colorMode === mode}
      onClick={(e) => setColorMode(mode)}
    >
      {mode === 'light' 
        ? <IconBrightnessHigh />
        : <IconBrightness4 />
      }
    </IconButton>
  );

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
};
