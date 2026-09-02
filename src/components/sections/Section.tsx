import React, { MutableRefObject } from 'react';
import { cn } from 'lib/cn';

const SECTION_ID_TOP_PLACEMENT = {
  default: '10%',
  home: '10px',
  contact: '80%',
  work: '50%',
  tech: '90%',
};

type Props = {
  sectionId: string,
  forwardedRef: MutableRefObject<HTMLDivElement>,
}

function SectionTrackingPixel({ sectionId, forwardedRef }: Props) {
  return (
    <div
      className="trackingPixel absolute h-px w-px"
      style={{ top: SECTION_ID_TOP_PLACEMENT[sectionId] || SECTION_ID_TOP_PLACEMENT.default }}
      section-id={sectionId}
      ref={forwardedRef}
    />
  );
}

const Section = ({ id, children, className }, ref) => (
  <section
    id={id}
    className={cn(
      'relative flex justify-center flex-col px-8 sm:px-64 land:px-128 py-64 sm:py-128',
      className,
    )}
  >
    <SectionTrackingPixel sectionId={id} forwardedRef={ref} />

    {children}
  </section>
);

export default React.forwardRef(Section);
