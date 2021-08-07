import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  setHasScrolled: PropTypes.func.isRequired,
}

function TSParticlesImageTrackingPixel({ setHasScrolled }) {

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrolledDownObserver);

    createScrolledDownInterestionObserver(observer);

    return () => { 
      unobserveScrolledDownInterestionObserver(observer); 
    }
  }, [handleScrolledDownObserver]);

  // -- Intersection Observer Logic ---------------------------------------------------------------
  
  const scrolledDownTrackingPixelRef = useRef();

  /** @param {IntersectionObserver} observer */
   function createScrolledDownInterestionObserver(observer) {
    if (!scrolledDownTrackingPixelRef.current) { return; }
    
    observer.observe(scrolledDownTrackingPixelRef.current) 
  }

  /** @param {IntersectionObserverEntry} entries */
  function handleScrolledDownObserver(entries) {
    setHasScrolled(!(entries[0].intersectionRatio > 0))
  }
  
  /** @param {IntersectionObserver} observer */
  function unobserveScrolledDownInterestionObserver(observer) {
    if (!scrolledDownTrackingPixelRef.current) { return; }
    
    observer.unobserve(scrolledDownTrackingPixelRef.current) 
  }
  
  // -- Renders -----------------------------------------------------------------------------------

  return (
    <div sx={{ 
        position: 'absolute',
        height: '1px', 
        width: '1px', 
        bottom: '10px',
      }}
      ref={scrolledDownTrackingPixelRef}
    />
  )
}

TSParticlesImageTrackingPixel.propTypes = propTypes;

export default TSParticlesImageTrackingPixel;