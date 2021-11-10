import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';

import NavTabs from 'components/nav/header/Tabs';
import NavSocialIcons from 'components/nav/header/SocialIconButtons';
import ThemeSelector from 'components/nav/theme-selector/Dropdown';
import SVGAriellaVu from 'components/svg/ariellavu';

import PROP_TYPE from 'constants/prop-types';

const paddingFrame = 45;
const paddingInsideFrame = 28;

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
    /** @hack temp hack to smooth out animation */
    setTimeout(() => {
      setHasScrolled(!(entry.intersectionRatio > 0));
    }, 50);
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
      sx={{
        background: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0)',
        display: 'flex',
        alignItems: 'flex-end',
        height: '110rem',
        width: '100%',
        transition: 'transform 0.4s, background 1.4s, box-shadow 1.4s, blur 1.4s, box-shadow 1.4s',
        boxShadow: '0 6rem 10rem -6rem rgba(30, 30, 30, 0)',
        px: `${paddingFrame + paddingInsideFrame}rem`,
        transform: ['translateY(-110rem)', 'translateY(-110rem)', 'translateY(0)'],

        '&[has-scrolled="true"]': {
          background: (t) => t.colors.navHeaderBg,
          backdropFilter: 'blur(4px)',

          transform: ['translateY(-110rem)', 'translateY(-110rem)', 'translateY(-70rem)'],
          boxShadow: '0 6rem 10rem -6rem rgba(30, 30, 30, 0.30)',

          '#NavHeader-SVGAriellaVu': {
            // animation: `${bgChangeKeyframe} 5s infinite`,]
            transform: `translateX(-${paddingInsideFrame + (paddingFrame / 2) + 15}rem) scale(0.78)`,
          },

          '.NavHeader_rightSide': {
            transform: `translateX(${paddingInsideFrame + (paddingFrame / 2)}rem)`,
          },

          '.NavTab': {
            letterSpacing: '1rem',
            color: (t) => t.colors.frameText,
          },
        },
      }}
      has-scrolled={hasScrolled.toString()}
    >
      <span>
        <Fade delay={600} duration={2800} cascade>
          <SVGAriellaVu
            id="NavHeader-SVGAriellaVu"
            sx={{
              height: '28rem',
              transition: 'transform 0.4s',
              path: {
                fill: (t) => t.colors.svgAriellaVuActive,
              },
            }}
          />
        </Fade>
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
