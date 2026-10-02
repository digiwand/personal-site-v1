import type { ReactNode, Ref } from 'react';
import type { SectionId } from 'constants/section';
import { cn } from 'lib/cn';

const SECTION_TRACKING_TOP: Record<SectionId, string> = {
  home: '10px',
  about: '10%',
  contact: '80%',
  work: '50%',
  tech: '90%',
};

function trackingTop(sectionId: string) {
  if (sectionId in SECTION_TRACKING_TOP) {
    return SECTION_TRACKING_TOP[sectionId as SectionId];
  }
  return '10%';
}

interface TrackingProps {
  sectionId: string;
  ref?: Ref<HTMLDivElement>;
}

function SectionTrackingPixel({ sectionId, ref }: TrackingProps) {
  return (
    <div
      className="trackingPixel absolute h-px w-px"
      data-section-id={sectionId}
      ref={ref}
      style={{ top: trackingTop(sectionId) }}
    />
  );
}

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

function Section({ id, children, className, ref }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'relative flex justify-center flex-col px-8 sm:px-64 land:px-128 py-64 sm:py-128',
        className,
      )}
    >
      <SectionTrackingPixel ref={ref} sectionId={id} />
      {children}
    </section>
  );
}

export default Section;
