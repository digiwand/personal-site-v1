import { useState, type RefObject } from 'react';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/MenuButton';
import NavDrawer from 'components/nav/drawer/Drawer';
import BlurredBackground from 'components/nav/BlurredBackground';
import NavHeader from 'components/nav/header/NavHeader';
import { SECTION_ID } from 'constants/section';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

interface Props {
  sectionTrackingPixelRefs: ReadonlyArray<RefObject<HTMLDivElement | null>>;
  pageTopTrackingPixelRef: RefObject<HTMLDivElement | null>;
}

function Nav({ sectionTrackingPixelRefs, pageTopTrackingPixelRef }: Props) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTION_ID.HOME);

  /**
   * A threshold of 0.8 or 0.6 fires several callbacks per section. A 1px tracking
   * pixel on each section keeps the callback to a single intersection.
   */
  const handleSectionIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.intersectionRatio <= 0) return;

    const sectionId = entry.target.getAttribute('data-section-id');
    if (!sectionId || sectionId === activeSectionId) return;

    window.history.pushState(null, '', `#${sectionId}`);
    setActiveSectionId(sectionId);
  };

  useIntersectionObserver(sectionTrackingPixelRefs, handleSectionIntersection);

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

  return (
    <div
      className="fixed top-0 right-0 w-full z-10"
      data-open={String(isOpenDrawer)}
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

export default Nav;
