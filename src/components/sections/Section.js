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
      top: '25vh',
    }}
    section-id={sectionId}
    ref={forwardedRef}
  />
);

const Section = ({ id, children }, ref) => (
  <section
    id={id}
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      px: [4, 6, 6],
    }}
  >
    <SectionTrackingPixel sectionId={id} forwardedRef={ref} />

    {children}
  </section>
);

export default React.forwardRef(Section);
