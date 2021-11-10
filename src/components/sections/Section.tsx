import React, { MutableRefObject } from 'react';

const SECTION_ID_TOP_PLACEMENT = {
  default: '10%',
  home: '10px',
  contact: '80%',
  work: '50%',
  tech: '90%',
};

type Props = {
  sectionId: string,
  forwardedRef: MutableRefObject<IntersectionObserver>,
}

/**
 * Used to be observed by IntersectionObserver. These forwardRefs are a bit excessive.
 * Consider using React.Context to control the Nav states and move the IntersectionObserver
 * closer
 */
function SectionTrackingPixel({ sectionId, forwardedRef }: Props) {
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
      px: [2, 5, 6],
      py: [5, 6, 6],
    }}
  >
    <SectionTrackingPixel sectionId={id} forwardedRef={ref} />

    {children}
  </section>
);

export default React.forwardRef(Section);
