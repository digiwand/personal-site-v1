import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/navDrawer/NavMenuButton';
import NavDrawer from 'components/nav/navDrawer/NavDrawer';
import NavHeader from 'components/nav/navHeader/NavHeader';
import PROP_TYPE from 'constants/prop-types';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.arrayOf(PROP_TYPE.REF),
  pageTopTrackingPixelRef: PROP_TYPE.REF,
};

const defaultProps = {
  sectionTrackingPixelRefs: [],
  pageTopTrackingPixelRef: null,
};

function Nav({ sectionTrackingPixelRefs, pageTopTrackingPixelRef }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('home');
  const sectionIntersectionObserverRef = useRef();

  const handleSectionIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio <= 0) { return; }

      const sectionId = entry.target.getAttribute('section-id');
      if (sectionId !== activeSectionId) {
        window.history.pushState(null, null, `#${sectionId}`);
        setActiveSectionId(sectionId);
      }
    });
  };

  /**
   * Using the IntersectionObserver "threshold" option of 0.8 or 0.6 causes 4 callbacks
   * instead of 1. Instead of using "threshold" we will observe a tracking pixel on the
   * section element.
   */
  useEffect(() => {
    if (sectionIntersectionObserverRef.current) { sectionIntersectionObserverRef.current.disconnect(); }

    let currentObserver;

    if (sectionTrackingPixelRefs && sectionTrackingPixelRefs.length > 0) {
      sectionIntersectionObserverRef.current = new IntersectionObserver(handleSectionIntersection);

      currentObserver = sectionIntersectionObserverRef.current;

      sectionTrackingPixelRefs.forEach((sectionRef) => {
        if (sectionRef.current) {
          currentObserver.observe(sectionRef.current);
        }
      });
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  });

  // -- Handlers ----------------------------------------------------------------------------------

  function handleCloseDrawer() {
    setIsOpenDrawer(false);
  }

  function handleOpenDrawer() {
    setIsOpenDrawer(true);
  }

  function handleOutsideDrawerClick() {
    if (isOpenDrawer) {
      handleCloseDrawer();
    }
  }

  // -- Renders -----------------------------------------------------------------------------------

  // move blurred background into its own function component
  const blurBackground = (
    <div
      css={{
        /** @todo update logic as this is not supported in firefox. also, consider animating */
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
      sx={{ display: ['block', 'block', 'none'] }}
    />
  );

  return (
    <div
      sx={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
        zIndex: 10,
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
          handleCloseMenu={handleCloseDrawer}
        />
      </OutsideClickHandler>
    </div>
  );
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
