import React from 'react';

/**
 * Used to be observed by IntersectionObserver. These forwardRefs are a bit excessive.
 * Consider using React.Context to control the Nav states and move the IntersectionObserver
 * closer
 */
const SectionTrackingPixel = ({ sectionId, forwardedRef }) => (
  <div
    className="trackingPixel"
    sx={{
      position: 'absolute',
      height: '1px',
      width: '1px',
      top: '20vh',
    }}
    section-id={sectionId}
    ref={forwardedRef}
  />
);

const Section = ({ id, children, className }, ref) => (
  <section
    id={id}
    className={className}
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      px: [4, 6, 6],
      py: [4, 5, 5],
      minHeight: '80vh',
    }}
  >
    <SectionTrackingPixel sectionId={id} forwardedRef={ref} />

    {children}
  </section>
);

export default React.forwardRef(Section);
