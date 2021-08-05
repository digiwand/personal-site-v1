import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'theme-ui';

import NavTabs from 'components/nav/navTabs/NavTabs';

import PROP_TYPE from 'constants/prop-types';

const sxBorderMargin = 4;

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
  pageTopTrackingPixelRef: PROP_TYPE.REF,
}

function NavHeader({ activeSectionId, pageTopTrackingPixelRef }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(handlePageTopObserver);

    createPageTopInterestionObserver(observer);

    return () => { 
      unobservePageTopInterestionObserver(observer); 
    }
  }, [handlePageTopObserver]);

  // -- Intersection Observer Logic ---------------------------------------------------------------
  
  /** @param {IntersectionObserver} observer */
   function createPageTopInterestionObserver(observer) {
    if (!pageTopTrackingPixelRef.current) { return; }
    
    observer.observe(pageTopTrackingPixelRef.current) 
  }

  /** @param {IntersectionObserverEntry} entries */
  function handlePageTopObserver(entries) {
    setHasScrolled(!(entries[0].intersectionRatio > 0))
  }
  
  /** @param {IntersectionObserver} observer */
  function unobservePageTopInterestionObserver(observer) {
    if (!pageTopTrackingPixelRef.current) { return; }
    
    observer.unobserve(pageTopTrackingPixelRef.current) 
  }

  // -- Renders -----------------------------------------------------------------------------------

  return (
    <header sx={(theme) => ({
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
          background: `${theme.colors.primary}`,
          transform: ['translateY(-110px)', 'translateY(-70px)', 'translateY(-70px)'],
          boxShadow: '0 6px 10px -6px rgba(30, 30, 30, 0.30)',

          '.NavHeader_profileLogo' : {
            fontSize: "23px",
            transform: 'translateX(0)',
          },

          '.NavTab_displayName': {
            letterSpacing: '1rem',
          }
        },
      })}
      has-scrolled={hasScrolled.toString()}
    >
      {/** @todo replace w/ SVG */}
      <span className="NavHeader_profileLogo" sx={{
        fontFamily: '"MarckScript", Ariel',
        fontSize: "28px",
        flex: '1 0 auto',
        ml: sxBorderMargin,
        transform: 'translateX(50px)',
        transition: 'font-size 0.2s, transform 0.2s',
      }}>
        Ariella Vu
      </span>
      <NavTabs activeSectionId={activeSectionId} />
      <Button
        sx={{
          ml: 4,
          height: '40px',
          fontSize: '13px',
          fontWeight: '500',
        }}
      >
        RESUME
      </Button>
    </header>
  );
}

NavHeader.propTypes = propTypes;

export default NavHeader;