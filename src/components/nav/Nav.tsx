import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/MenuButton';
import NavDrawer from 'components/nav/drawer/Drawer';
import BlurredBackground from 'components/nav/BlurredBackground';
import NavHeader from 'components/nav/header/NavHeader';

type Props = {
  sectionTrackingPixelRefs?: MutableRefObject<HTMLDivElement>[],
  pageTopTrackingPixelRef?: MutableRefObject<HTMLDivElement>,
};

const defaultProps = {
  sectionTrackingPixelRefs: [],
  pageTopTrackingPixelRef: null,
};

function Nav({ sectionTrackingPixelRefs, pageTopTrackingPixelRef }: Props) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('home');

  const sectionIntersectionObserverRef = useRef<IntersectionObserver>();

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
    if (sectionIntersectionObserverRef.current) { sectionIntersectionObserverRef.current?.disconnect(); }

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

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true);
  };

  const handleOutsideDrawerClick = () => {
    if (isOpenDrawer) {
      handleCloseDrawer();
    }
  };

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

Nav.defaultProps = defaultProps;

export default Nav;
