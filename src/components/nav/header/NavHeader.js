import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/react';

import NavTabs from 'components/nav/header/Tabs';
import NavSocialIcons from 'components/nav/header/SocialIconButtons';
import ThemeSelector from 'components/nav/theme-selector/Dropdown';

import PROP_TYPE from 'constants/prop-types';

const paddingFrame = 45;
const paddingInsideFrame = 28;

const bgChangeKeyframe = keyframes`
  0%{background-position:10% 0%}
  50%{background-position:91% 100%}
  100%{background-position:10% 0%}
`;

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  pageTopTrackingPixelRef: PROP_TYPE.REF,
};

const defaultProps = {
  pageTopTrackingPixelRef: null,
};

function NavHeader({ activeSectionId, pageTopTrackingPixelRef }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pageTopObserverRef = useRef();

  const handlePageTopObserver = ([entry]) => {
    setHasScrolled(!(entry.intersectionRatio > 0));
  };

  useEffect(() => {
    if (pageTopObserverRef.current) { pageTopObserverRef.current.disconnect(); }

    let currentObserver;

    if (pageTopTrackingPixelRef) {
      pageTopObserverRef.current = new IntersectionObserver(handlePageTopObserver);
      currentObserver = pageTopObserverRef.current;

      const currentRef = pageTopTrackingPixelRef.current;

      if (currentRef) {
        currentObserver.observe(currentRef);
      }
    }

    return () => { if (currentObserver) { currentObserver.disconnect(); } };
  }, [pageTopTrackingPixelRef]);

  // -- Renders -----------------------------------------------------------------------------------

  return (
    <header
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'flex-end',
        height: '110rem',
        boxShadow: '0 6rem 10rem -6rem rgba(30, 30, 30, 0)',
        width: '100%',
        px: `${paddingFrame + paddingInsideFrame}rem`,
        transition: 'transform 0.4s, background 0.25s, box-shadow 0.25s',
        transform: ['translateY(-110rem)', 'translateY(-110rem)', 'translateY(0)'],

        '&[has-scrolled="true"]': {
          background: theme.colors.navHeaderBg,
          backdropFilter: 'blur(4px)',

          transform: ['translateY(-110rem)', 'translateY(-110rem)', 'translateY(-70rem)'],
          boxShadow: '0 6rem 10rem -6rem rgba(30, 30, 30, 0.30)',

          '.NavHeader_profileLogo': {
            backgroundImage: theme.colors.navHeaderLogoBgImageScrolled,
            animation: `${bgChangeKeyframe} 5s infinite`,
            fontSize: '23px',
            transform: `translateX(-${paddingInsideFrame + (paddingFrame / 2)}rem)`,
          },

          '.NavHeader_rightSide': {
            transform: `translateX(${paddingInsideFrame + (paddingFrame / 2)}rem)`,
          },

          '.NavTab': {
            letterSpacing: '1rem',
            color: `${theme.colors.frameText}`,
          },
        },
      })}
      has-scrolled={hasScrolled.toString()}
    >
      {/** @todo replace w/ SVG */}
      <span
        className="NavHeader_profileLogo"
        sx={{
          variant: 'text.gradient',
          backgroundImage: (t) => `linear-gradient(45deg, ${t.colors.text}, pink)`,
          backgroundSize: '200% 200%',
          fontFamily: 'profile',
          fontSize: '28rem',
          lineHeight: '34rem',
          transition: 'font-size 0.4s, transform 0.4s, background 0.4s',
          pl: 1,
        }}
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
NavHeader.defaultProps = defaultProps;

export default NavHeader;
