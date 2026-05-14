import { getColor } from '@theme-ui/color';
import React, { useCallback, useState } from 'react';
import Fade from 'components/animations/Fade';

import Section from 'components/sections/Section';
import JobSectionMetaMask from 'components/sections/work/job-section/MetaMask';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';
import { WorkImageCarouselModal } from 'components/sections/work/job-section/JobSection';
import { WORK_IMG_CONFIGS } from 'components/sections/work/jobSectionImageConfigs';
import WorkSideHeading from 'components/sections/work/WorkSideHeading';

function EducationSection() {
  return (
    <div sx={{
      gridColumnStart: 'content-start',
      maxWidth: '850rem',
    }}
    >
      <Fade>
        <div
          className="u-glass"
          sx={{
            py: 5,
            px: 4,
          }}
        >
          <h2
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: 'block',
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => getColor(t, 'workHeader'),
          }}
          >
            B.A.S. Computer Science
          </h2>
          <h4
            sx={{
            display: 'block',
            color: (t) => getColor(t, 'workSubHeader'),
            pt: 4,
            pb: 2,
          }}
          >
            University of California, Davis
          </h4>
          <h5
            sx={{
            color: (t) => getColor(t, 'workHeader'),
          }}
          >
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
    <Section
      id="work"
      ref={ref}
    >
      <div sx={{
        display: 'grid',
        gridTemplateColumns: ['auto', 'auto', '[label-start] 1fr [content-start] 2fr [end]'],
        gridTemplateRows: ['auto auto'],
        columnGap: ['0', '0', '20rem'],
        rowGap: [5, 6, 6],
      }}
      >
        <WorkSideHeading text="WORK EXPERIENCE" sx={{ pb: [0, 0, 5] }} />
        <JobSectionMetaMask />
        <JobSectionCopper onOpenWorkCarousel={openWorkCarousel} />
        <JobSectionPriceSpider onOpenWorkCarousel={openWorkCarousel} />

        <WorkSideHeading text="EDUCATION" />
        <EducationSection />
      </div>

      <WorkImageCarouselModal
        key={carouselMountKey}
        slideConfigs={WORK_IMG_CONFIGS}
        initialSlideIndex={initialSlideIndex}
        isOpen={carouselOpen}
        onClose={closeWorkCarousel}
      />
    </Section>
  );
};

export default React.forwardRef(WorkSection);
