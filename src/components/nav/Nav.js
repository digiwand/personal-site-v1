import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/navDrawer/NavMenuButton';
import NavDrawer from 'components/nav/navDrawer/NavDrawer';
import NavHeader from 'components/nav/navHeader/NavHeader';
import PROP_TYPE from 'constants/prop-types';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.array,
  pageTopTrackingPixelRef: PROP_TYPE.REF,
};

function Nav({ sectionTrackingPixelRefs, pageTopTrackingPixelRef }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(handleSectionIntersection);

    createSectionInterestionObservers(observer);

    return () => { 
      unobserveSectionIntersectionObservers(observer); 
    }
  }, [handleSectionIntersection]);

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
   * @param {IntersectionObserver} observer
   */
  function createSectionInterestionObservers(observer) {
    sectionTrackingPixelRefs.forEach((sectionRef) => {
      if (sectionRef.current) { 
        observer.observe(sectionRef.current) 
      }
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
  
  /** @param {IntersectionObserver} observer */
  function unobserveSectionIntersectionObservers(observer) {
    sectionTrackingPixelRefs.forEach((sectionRef) => {
      if (sectionRef.current) { observer.unobserve(sectionRef.current) }
    });
  }

  // -- Renders -----------------------------------------------------------------------------------

  // move blurred background into its own function component
  const blurBackground = (
    <div css={{
        /** @todo update logic as this is not supported in firefox. also, consider animating*/
        backdropFilter: 'blur(2px) opacity(0.95) brightness(0.85)',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: '0',
        top: '0',
        transition: 'backdropFilter 0.3s',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      sx={{ display: ['block', 'none', 'none'] }}
    />
  )

  return (
    <div sx={{
        position: 'fixed',
        top: '0',
        right: '0',
      }}
      is-open={String(isOpenDrawer)}
    >

      <NavHeader
        activeSectionId={activeSectionId}
        pageTopTrackingPixelRef={pageTopTrackingPixelRef}
      />

      {isOpenDrawer && blurBackground}

      <MenuButton onClick={handleOpenDrawer} />

      <OutsideClickHandler onOutsideClick={handleOutsideDrawerClick}>
        <NavDrawer
          activeSectionId={activeSectionId}
          isOpen={isOpenDrawer} 
          handleCloseMenu={handleCloseDrawer} />
      </OutsideClickHandler>
    </div>
  );
}

Nav.propTypes = propTypes;

export default Nav;