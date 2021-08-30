import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/MenuButton';
import NavDrawer from 'components/nav/drawer/Drawer';
import BlurredBackground from 'components/nav/BlurredBackground';
import NavHeader from 'components/nav/header/NavHeader';
import PROP_TYPE from 'constants/prop-types';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.arrayOf(PROP_TYPE.REF).isRequired,
  pageTopTrackingPixelRef: PROP_TYPE.REF.isRequired,
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

    sectionIntersectionObserverRef.current = new IntersectionObserver(handleSectionIntersection);

    const { current: currentObserver } = sectionIntersectionObserverRef;

    sectionTrackingPixelRefs.forEach((sectionRef) => {
      if (sectionRef.current) {
        currentObserver.observe(sectionRef.current);
      }
    });

    return () => { currentObserver.disconnect(); };
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

      {isOpenDrawer && <BlurredBackground />}

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

export default Nav;
