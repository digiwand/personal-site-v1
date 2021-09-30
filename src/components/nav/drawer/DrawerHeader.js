import { IconButton } from 'theme-ui';
// import { keyframes } from '@emotion/react';

import SVGAriellaVu from 'components/svg/ariellavu';

const headerAndFooterHeight = '60rem';

// @todo add back keyframes
// const bgChangeKeyframe = keyframes`
//   0%{background-position:10% 0%}
//   50%{background-position:91% 100%}
//   100%{background-position:10% 0%}
// `;

function DrawerFooter({ handleCloseMenu, sxFadeInInitialize }) {
  const closeButton = (
    <IconButton
      className="NavDrawer_iconButton"
      sx={{
        height: headerAndFooterHeight,
        width: headerAndFooterHeight,

        ...sxFadeInInitialize,

        ':hover .NavDrawer_closeSVG > path': {
          fill: (t) => t.colors.navDrawerSocialIconsHoverColor,
        },
      }}
      onClick={() => { handleCloseMenu(); }}
    >
      <svg
        alt="Close Menu"
        className="NavDrawer_closeSVG"
        viewBox="0 0 24 24"
        sx={{
          height: '30rem',

          '> path': {
            transition: 'fill 0.15s',
            fill: (t) => t.colors.frameText,
          },
        }}
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </IconButton>
  );

  return (
    <div sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: headerAndFooterHeight,
      flex: `0 0 ${headerAndFooterHeight}`,
    }}
    >
      <span
        className="NavDrawer_profileLogo"
        sx={{
          // variant: 'text.gradient',
          // backgroundSize: '200% 200%',
          pl: '22rem',
          transform: 'translateX(50rem)',
          // animation: `${bgChangeKeyframe} 5s infinite`,
          color: (t) => t.colors.frameText,

          ...sxFadeInInitialize,

          // Adjust for uneven font center
          pt: '7rem',

          // override sxFadeInInitialize transition
          transition: 'background 0.4s, opacity 1s, transform 1s cubic-bezier(0.215, 0.61, 0.355, 1)',
        }}
      >
        <SVGAriellaVu
          id="NavDrawer-SVGAriellaVu"
          sx={{
            position: 'relative',
            height: '24rem',
            transition: 'height 0.4s, transform 0.4s',
            path: {
              fill: (t) => t.colors.svgAriellaVuActive,
            },
          }}
        />
      </span>
      {closeButton}
    </div>
  );
}

export default DrawerFooter;
