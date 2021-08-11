import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NavTabs from 'components/nav/navTabs/NavTabs';
import NavSocialIcons from 'components/nav/SocialIcons';

import PROP_TYPE from 'constants/prop-types';

const sxBorderMargin = 4;

const defaultProps = {
  pageTopTrackingPixelRef: null,
};

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  pageTopTrackingPixelRef: PROP_TYPE.REF,
};

function NavHeader({ activeSectionId, pageTopTrackingPixelRef }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handlePageTopObserver = useCallback(
    (entries) => {
      setHasScrolled(!(entries[0].intersectionRatio > 0));
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handlePageTopObserver);
    const pageTopCurrentRef = pageTopTrackingPixelRef.current;

    if (pageTopCurrentRef) {
      observer.observe(pageTopCurrentRef);
    }

    return () => {
      if (pageTopCurrentRef) {
        observer.unobserve(pageTopCurrentRef);
      }
    };
  }, [hasScrolled, pageTopTrackingPixelRef, handlePageTopObserver]);

  // -- Renders -----------------------------------------------------------------------------------

  return (
    <header
      sx={() => ({
        display: 'flex',
        alignItems: 'flex-end',
        height: '110px',
        width: '100vw',
        pr: sxBorderMargin,
        transition: 'transform 0.25s, background 0.25s, box-shadow 0.25s',
        // remove when I add personal logo / signature
        justifyContent: 'flex-end',
        boxShadow: '0 6px 10px -6px rgba(30, 30, 30, 0)',
        transform: ['translateY(-110px)', 'translateY(0)', 'translateY(0)'],

        '&[has-scrolled="true"]': {
          // todo. replace color
          // background: `${theme.colors.primary}`,
          background: '#F0F5F9',
          transform: ['translateY(-110px)', 'translateY(-70px)', 'translateY(-70px)'],
          boxShadow: '0 6px 10px -6px rgba(30, 30, 30, 0.30)',

          '.NavHeader_profileLogo': {
            fontSize: '23px',
            transform: 'translateX(0)',
          },

          '.NavTab_displayName': {
            letterSpacing: '1rem',
          },
        },
      })}
      has-scrolled={hasScrolled.toString()}
    >
      {/** @todo replace w/ SVG */}
      <span
        className="NavHeader_profileLogo"
        sx={{
          fontFamily: '"MarckScript", Ariel',
          fontSize: '28px',
          lineHeight: '34px',
          flex: '1 0 auto',
          ml: sxBorderMargin,
          transform: 'translateX(50px)',
          transition: 'font-size 0.2s, transform 0.2s',
        }}
      >
        Ariella Vu
      </span>
      <NavTabs activeSectionId={activeSectionId} />

      <NavSocialIcons />

    </header>
  );
}

NavHeader.defaultProps = defaultProps;
NavHeader.propTypes = propTypes;

export default NavHeader;
