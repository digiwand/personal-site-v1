import React, { useCallback, useState } from 'react';
import Fade from 'components/animations/Fade';

import Section from 'components/sections/Section';
import ImgModalCarousel from 'components/sections/work/img-modal-carousel/ImgModalCarousel';
import SummaryMetaMask from 'components/sections/work/summary/MetaMask';
import SummaryCopper from 'components/sections/work/summary/Copper';
import SummaryWayvia from 'components/sections/work/summary/Wayvia';
import WorkSideHeading from 'components/sections/work/WorkSideHeading';
import { WORK_IMG_CONFIGS } from 'components/sections/work/shared/constants';

function EducationSection() {
  return (
    <div className="work-col-content max-w-[850rem]">
      <Fade>
        <div className="u-glass rounded-[10rem] py-64 px-32">
          <h2
            className="font-heading2 text-shadow-theme block tracking-[-0.5rem] sm:tracking-[3rem]
              text-[var(--theme-work-header)]"
          >
            B.A.S. Computer Science
          </h2>
          <h4 className="block text-[var(--theme-work-sub-header)] pt-32 pb-8">
            University of California, Davis
          </h4>
          <h5 className="text-[var(--theme-work-header)]">
            Sept 2010 - Sept 2014
          </h5>
        </div>
      </Fade>
    </div>
  );
}

const WorkSection = (_props, ref) => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);
  const [carouselMountKey, setCarouselMountKey] = useState(0);

  const openWorkCarousel = useCallback((globalIndex) => {
    setInitialSlideIndex(globalIndex);
    setCarouselMountKey((k) => k + 1);
    setCarouselOpen(true);
  }, []);

  const closeWorkCarousel = useCallback(() => {
    setCarouselOpen(false);
  }, []);

  return (
    <Section id="work" ref={ref}>
      <div className="work-grid">
        <WorkSideHeading text="WORK EXPERIENCE" className="pb-0 land:pb-64" />
        <SummaryMetaMask />
        <SummaryCopper onOpenWorkCarousel={openWorkCarousel} />
        <SummaryWayvia onOpenWorkCarousel={openWorkCarousel} />

        <WorkSideHeading text="EDUCATION" />
        <EducationSection />
      </div>

      <ImgModalCarousel
        key={carouselMountKey}
        imgConfigs={WORK_IMG_CONFIGS}
        initialSlideIndex={initialSlideIndex}
        isOpen={carouselOpen}
        onClose={closeWorkCarousel}
      />
    </Section>
  );
};

export default React.forwardRef(WorkSection);
