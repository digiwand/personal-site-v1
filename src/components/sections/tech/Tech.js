import React from 'react';
import Fade from 'components/animations/Fade';

import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';
import TechCarousel from 'components/sections/tech/Carousel';

function TechSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.TECH}
      ref={ref}
      className="min-h-0 py-64 sm:py-128 z-1 overflow-hidden bg-[var(--theme-tech-bg)]"
    >
      <Fade>
        <h2 className="text-shadow-theme text-[var(--theme-home-hello)] block text-center pt-32 sm:pt-0">
          Tech
        </h2>
      </Fade>

      <div className="flex items-center justify-center pt-32 sm:pt-64">
        <TechCarousel />
      </div>
    </Section>
  );
}

export default React.forwardRef(TechSection);
