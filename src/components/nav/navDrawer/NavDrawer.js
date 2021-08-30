import PropTypes from 'prop-types';
import { IconButton } from 'theme-ui';

import NavDrawerItem from 'components/nav/navDrawer/NavDrawerItem';
import NavDrawerSocialIconButtons from 'components/nav/navDrawer/SocialIconButtons';

const headerAndFooterWidth = '60rem';
const tabletWidth = '320rem';

function DrawerFooter() {
  return (
    <div sx={{
      height: headerAndFooterWidth,
      borderTop: (t) => `1rem solid ${t.colors.frameBorder}`,
      display: 'flex',
    }}
    >
      <NavDrawerSocialIconButtons />
    </div>
  );
}

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function NavDrawer({ activeSectionId, handleCloseMenu, isOpen }) {
  function closeMenu() {
    handleCloseMenu();
  }

  // -- Renders -----------------------------------------------------------------------------------

  const closeButton = (
    <IconButton
      sx={{
        height: headerAndFooterWidth,
        width: headerAndFooterWidth,

        ':hover .NavDrawer_closeSVG > path': {
          fill: (t) => t.colors.frameHoverText,
        },
      }}
      onClick={closeMenu}
    >
      <svg
        alt="Close Menu"
        className="NavDrawer_closeSVG"
        viewBox="0 0 24 24"
        sx={{
          height: '30px',

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

  const drawerHeader = (
    <div sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: headerAndFooterWidth,
    }}
    >
      <span
        sx={{
          fontFamily: 'profile',
          fontSize: 3,
          lineHeight: '60rem',
          pl: 4,
          // Adjust for unevent font center
          pt: '7rem',
          color: (t) => t.colors.frameText,
        }}
      >
        Ariella Vu
      </span>
      {closeButton}
    </div>
  );

  return (
    <aside
      sx={(t) => ({
        position: 'fixed',
        flexDirection: 'column',
        overflow: 'auto',
        height: '100vh',
        top: '0',
        right: '0',
        boxShadow: '0 0 0 0 transparent',
        background: `${t.colors.frame}`,

        display: ['flex', 'flex', 'none'],
        transform: ['translateX(100%)', `translateX(${tabletWidth})`],
        width: ['100%', tabletWidth],
        transition: 'box-shadow 0.3s, transform 0.4s ease-in, width 0.3s',

        '&[is-open="true"]': {
          transform: ['translateX(0)', 'translateX(0)', `translateX(${tabletWidth})`],
          boxShadow: `-5px 0px 10px 1px ${t.colors.frameBorder}`,
        },
      })}
      is-open={String(isOpen)}
    >
      {drawerHeader}

      <div sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: '1 0 auto',
      }}
      >

        <nav sx={{
          display: 'flex',
          flexDirection: 'column',
          '[is-active="true"]': {
            fontWeight: 700,
          },
        }}
        >
          <NavDrawerItem href="#home" displayName="Home" isActive={activeSectionId === 'home'} />
          <NavDrawerItem href="#about" displayName="About" isActive={activeSectionId === 'about'} />
          <NavDrawerItem href="#work" displayName="Work" isActive={activeSectionId === 'work'} />
          <NavDrawerItem href="#tech" displayName="Tech" isActive={activeSectionId === 'tech'} />
          <NavDrawerItem href="#contact" displayName="Contact" isActive={activeSectionId === 'contact'} />
        </nav>
      </div>

      <DrawerFooter />
    </aside>
  );
}

NavDrawer.propTypes = propTypes;

export default NavDrawer;
