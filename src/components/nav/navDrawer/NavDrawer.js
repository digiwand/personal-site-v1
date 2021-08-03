import React from 'react';
import PropTypes from 'prop-types';

import NavDrawerItem from 'components/nav/navDrawer/navDrawerItem/NavDrawerItem';

const headerAndFooterWidth = '60px';

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

/**
 * @todo:
 * - show active section in nav
 * - replace close/open buttons
 * - resume button
 */
function NavDrawer({ activeSectionId, handleCloseMenu, isOpen }) {
  function closeMenu() {
    handleCloseMenu();
  }

  // -- Renders -----------------------------------------------------------------------------------

  const closeButton = (
    <button sx={{
      height: headerAndFooterWidth,
      width: headerAndFooterWidth,
      float: 'right',
    }}
    onClick={closeMenu}
  >
    {/* @todo: update open/close menu icon */}
    <svg viewBox="0 0 24 24" 
      title="Close Menu"
      sx={{
        height: '30px',
      }}
    >
      <path fill="#fff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  </button>
  );

  const drawerHeader = (
    <div sx={{
        height: headerAndFooterWidth,
      }}
    >
      {closeButton}
    </div>
  );

  const drawerFooter = (
    <div sx={{
        height: headerAndFooterWidth,
      }}
    >
      {/** @todo add shortcut buttons. contact? theme selector? */}
    </div>
  )

  return (
    <aside sx={(theme) => ({
        position: 'fixed',
        display: ['flex', 'none', 'none'],
        flexDirection: 'column',
        overflow: 'auto',
        height: '100vh',
        width: '280px',
        transition: 'transform 0.3s',
        background: `${theme.colors.drawer}`,
        top: '0',
        right: '0',
        transform: ['translateX(0)', 'translateX(280px)', 'translateX(280px)'],

        '&[is-open="false"]': {
          transform: 'translateX(280px)',
        },
      })}
      is-open={String(isOpen)}
    >
      {drawerHeader}

      <nav sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '1 0 auto',
        }}
      >
        <NavDrawerItem href="#home" displayName="Home" />
        <NavDrawerItem href="#about" displayName="About" />
        <NavDrawerItem href="#contact" displayName="Contact" />
        
        {/** @todo add resume button */}
      </nav>

      {drawerFooter}
    </aside>
  );

}

NavDrawer.propTypes = propTypes;

export default NavDrawer;