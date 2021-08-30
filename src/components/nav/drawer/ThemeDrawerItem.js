import { Themed, useColorMode } from 'theme-ui';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

function ThemeNavDrawerItem() {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKeys = Object.keys(THEMEUI_COLOR_MODE_CONFIG);

  function selectNextColor() {
    const currentColorModeIndex = colorModeKeys.findIndex((value) => value === colorMode);
    const nextColorModeIndex = currentColorModeIndex < colorModeKeys.length - 1 ? currentColorModeIndex + 1 : 0;

    setColorMode(colorModeKeys[nextColorModeIndex]);
  }

  return (
    <button
      type="button"
      onClick={() => selectNextColor()}
      sx={(t) => ({
        mb: 'auto',
        py: 3,
        fontSize: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '2rem',
        fontFamily: 'body',
        color: t.colors.frameText,
        borderTop: `1rem solid ${t.colors.frameBorder}`,
        borderBottom: `1rem solid ${t.colors.frameBorder}`,
        transition: 'color 0.2s, background 0.2s',

        '&:hover': {
          color: t.colors.frameHoverText,
          background: t.colors.frameBorder,

          '& > svg > path': {
            fill: t.colors.frameHoverText,
          },
        },

        '> svg': {
          height: '28rem',
          width: '28rem',
        },
      })}
    >
      <span sx={{ pr: 4 }}>
        Change Theme
      </span>
      {THEMEUI_COLOR_MODE_CONFIG[colorMode].icon}
    </button>
  );
}

export default ThemeNavDrawerItem;
