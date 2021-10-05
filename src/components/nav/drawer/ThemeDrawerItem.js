import { useColorMode } from 'theme-ui';
import THEMEUI_COLOR_MODE_CONFIG from 'constants/theme-ui';

const sxFadeInInitialize = {
  opacity: 0,
  transform: 'translateX(100px)',
  transitionTimingFunction: 'ease, cubic-bezier(.1,1.3,.3,1)',
  transition: 'opacity 1s, transform 1s cubic-bezier(0.215, 0.61, 0.355, 1)',
  transitionDelay: ['.4s', '.3s'],
};

function ThemeNavDrawerItem() {
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
    <button
      type="button"
      onClick={() => selectNextColor()}
      sx={(t) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 'auto',
        py: 3,
        fontSize: 4,
        letterSpacing: '2rem',
        fontFamily: 'body',
        color: t.colors.frameText,
        transition: 'color 0.2s, background 0.2s',

        '&:hover': {
          color: t.colors.navDrawerActiveColor,

          '> div > svg > path': {
            fill: t.colors.navDrawerActiveColor,
          },

          '.NavDrawer-ThemeDrawerItem_text::before': {
            transform: 'translateX(-15rem)',
            opacity: '1',
          },
        },

        '> div > svg': {
          height: '28rem',
          width: '28rem',

          '> path': {
            transition: 'fill 0.3s',
            fill: t.colors.frameText,
          },
        },
      })}
    >
      <div
        className="NavDrawer-ThemeDrawerItem_text"
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          ...sxFadeInInitialize,

          '&::before': {
            content: '""',
            height: '2rem',
            width: '260rem',
            position: 'absolute',
            bottom: '-10rem',
            left: '0',
            opacity: '0',
            background: (t) => t.colors.text,
            transform: 'translatex(80rem)',
            transition: 'transform 0.3s ease-in-out, opacity 0.4s linear',
          },
        }}
      >
        {THEMEUI_COLOR_MODE_CONFIG[colorMode || 'light'].icon}
        <span sx={{ pl: 4 }}>
          Change Theme
        </span>
      </div>
    </button>
  );
}

export default ThemeNavDrawerItem;
