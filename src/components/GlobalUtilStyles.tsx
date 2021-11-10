import { Global } from '@emotion/react';
import { get } from 'theme-ui';

function GlobalUtilStyles() {
  return (
    <Global
      styles={(t) => ({
        '.u-glass': {
          boxShadow: '0 8rem 32rem 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(4px) saturate(130%)',
          borderRadius: '10rem',
          background: get(t, 'colors.glassBg'),
          border: get(t, 'colors.glassBorder'),
        },

        '.u-scrollbar': {
          overflow: 'auto',
          scrollBehavior: 'smooth',

          '&::-webkit-scrollbar-track': {
            borderRadius: '3rem',
            backgroundColor: get(t, 'colors.scrollTrack'),
          },

          '&::-webkit-scrollbar': {
            width: '6rem',
          },

          '::-webkit-scrollbar-thumb': {
            backgroundColor: get(t, 'colors.scrollThumb'),
            borderRadius: '3rem',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: get(t, 'colors.scrollThumbHover'),
          },
          '::-webkit-scrollbar-thumb:active': {
            backgroundColor: get(t, 'colors.scrollThumbHover'),
          },
        },
      })}
    />
  );
}

export default GlobalUtilStyles;
