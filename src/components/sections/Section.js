import React from 'react';

const SECTION_ID_TOP_PLACEMENT = {
  default: '10%',
  contact: '80%',
  work: '50%',
  tech: '90%',
};

/**
 * Used to be observed by IntersectionObserver. These forwardRefs are a bit excessive.
 * Consider using React.Context to control the Nav states and move the IntersectionObserver
 * closer
 */
function SectionTrackingPixel({ sectionId, forwardedRef }) {
  return (
    <div
      className="trackingPixel"
      sx={{
        position: 'absolute',
        height: '1px',
        width: '1px',
        top: SECTION_ID_TOP_PLACEMENT[sectionId] || SECTION_ID_TOP_PLACEMENT.default,
      }}
      section-id={sectionId}
      ref={forwardedRef}
    />
  );
}

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
      py: [4, 6, 6],
    }}
  >
    <SectionTrackingPixel sectionId={id} forwardedRef={ref} />

    {children}
  </section>
);

export default React.forwardRef(Section);
