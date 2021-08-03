import React, { useEffect, useState } from 'react';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/menuButton/MenuButton';
import NavTabs from 'components/nav/navTabs/NavTabs';
import NavDrawer from 'components/nav/navDrawer/NavDrawer';

function Nav() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('home');

  useEffect(() => {
    createSectionInterestionObservers();
  });

  // -- Handlers ----------------------------------------------------------------------------------

  function handleCloseDrawer() {
    setIsOpenDrawer(false);
  }

  function handleOpenDrawer() {
    setIsOpenDrawer(true);
  }

  function handleOutsideDrawerClick(e) {
    if (isOpenDrawer) {
      handleCloseDrawer();
    }
  }

  // -- Intersection Observer Logic ---------------------------------------------------------------
  
  /**
   * Using the IntersectionObserver "threshold" option of 0.8 or 0.6 causes 4 callbacks
   * instead of 1. Instead of using "threshold" we will observe a tracking pixel on the 
   * section element.
   */
  function createSectionInterestionObservers() {
    const observer = new IntersectionObserver(handleSectionIntersection);
    const trackingPixelSelector = 'section[id] > .trackingPixel';

    document.querySelectorAll(trackingPixelSelector).forEach((section) => {
      observer.observe(section);
    });
  }

  /** @param {IntersectionObserverEntry} entries */
  function handleSectionIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0) { return; }

      const sectionId = entry.target.getAttribute('section-id');
      if (sectionId !== activeSectionId) {
        window.history.pushState(null, null, `#${sectionId}`);
        setActiveSectionId(sectionId);
      }
    });
  }

  // -- Renders -----------------------------------------------------------------------------------

  const blurBackground = (
    <div css={{
        /** @todo update logic as this is not supported in firefox */
        backdropFilter: 'blur(2px) opacity(0.95) brightness(0.85)',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: '0',
        transition: 'backdropFilter 0.3s',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    />
  )

  return (
    <div 
      sx={{
        position: 'fixed',
        top: '0',
        right: '0',
      }}
      is-open={String(isOpenDrawer)}
    >
      {isOpenDrawer && blurBackground}

      <header sx={{
          display: 'flex',
          textAlign: 'center',
          mt: 4,
          mr: 4,
        }}
      >
        <NavTabs activeSectionId />
        {/** @todo add Resume button */}
      </header>

      <MenuButton onClick={handleOpenDrawer} />

      <OutsideClickHandler onOutsideClick={handleOutsideDrawerClick}>
        <NavDrawer  
          activeSectionId
          isOpen={isOpenDrawer} 
          handleCloseMenu={handleCloseDrawer} />
      </OutsideClickHandler>
    </div>
  );
}

export default Nav;