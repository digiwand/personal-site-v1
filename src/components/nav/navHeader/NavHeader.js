import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import NavTabs from 'components/nav/navTabs/NavTabs';
import NavSocialIcons from 'components/nav/SocialIcons';
import ThemeSelector from 'components/nav/navHeader/ThemeDropdown';

import PROP_TYPE from 'constants/prop-types';

const paddingFrame = 45;
const paddingInsideFrame = 28;
const scrollBarWidth = '6px';

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  pageTopTrackingPixelRef: PROP_TYPE.REF.isRequired,
};

function NavHeader({ activeSectionId, pageTopTrackingPixelRef }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pageTopObserverRef = useRef();

  const handlePageTopObserver = ([entry]) => {
    setHasScrolled(!(entry.intersectionRatio > 0));
  };

  useEffect(() => {
    if (pageTopObserverRef.current) { pageTopObserverRef.current.disconnect(); }

    pageTopObserverRef.current = new IntersectionObserver(handlePageTopObserver);

    const { current: currentObserver } = pageTopObserverRef;
    const currentRef = pageTopTrackingPixelRef.current;

    if (currentRef) {
      currentObserver.observe(currentRef);
    }

    return () => { currentObserver.disconnect(); };
  }, [pageTopTrackingPixelRef]);

  // -- Renders -----------------------------------------------------------------------------------

  return (
    <header
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'flex-end',
        height: '110px',
        width: `calc(100% - ${scrollBarWidth})`,
        px: `${paddingFrame + paddingInsideFrame}px`,
        transition: 'transform 0.4s, background 0.25s, box-shadow 0.25s',
        boxShadow: '0 6px 10px -6px rgba(30, 30, 30, 0)',
        transform: ['translateY(-110px)', 'translateY(-110px)', 'translateY(0)'],

        '&[has-scrolled="true"]': {
          background: `${theme.colors.frame}`,
          transform: ['translateY(-110px)', 'translateY(-110px)', 'translateY(-70px)'],
          boxShadow: '0 6px 10px -6px rgba(30, 30, 30, 0.30)',

          '.NavHeader_profileLogo': {
            fontSize: '23px',
            transform: `translateX(-${paddingInsideFrame + (paddingFrame / 2)}px)`,
          },

          '.NavHeader_rightSide': {
            transform: `translateX(${paddingInsideFrame + (paddingFrame / 2)}px)`,
          },

          '.NavTab': {
            letterSpacing: '1rem',
          },
        },
      })}
      has-scrolled={hasScrolled.toString()}
    >
      {/** @todo replace w/ SVG */}
      <span
        className="NavHeader_profileLogo"
        sx={(theme) => ({
          color: `${theme.colors.frameText}`,
          fontFamily: 'profile',
          fontSize: '28px',
          lineHeight: '34px',
          transition: 'font-size 0.4s, transform 0.4s',
        })}
      >
        Ariella Vu
      </span>
      <div
        className="NavHeader_rightSide"
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flex: '1 0 auto',
          transition: 'transform 0.4s',
        }}
      >
        <NavTabs activeSectionId={activeSectionId} />
        <NavSocialIcons />
        <ThemeSelector />
      </div>
    </header>
  );
}

NavHeader.propTypes = propTypes;

export default NavHeader;
