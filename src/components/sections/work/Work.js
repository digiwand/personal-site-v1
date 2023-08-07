import React from 'react';
import Fade from 'react-reveal/Fade';
import { Heading } from 'theme-ui';

import Section from 'components/sections/Section';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';
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
          <Heading
            as="h2"
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: 'block',
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => t.colors.workHeader,
          }}
          >
            B.A.S. Computer Science
          </Heading>
          <Heading
            as="h4"
            sx={{
            display: 'block',
            color: (t) => t.colors.workSubHeader,
            pt: 4,
            pb: 2,
          }}
          >
            University of California Davis
          </Heading>
          <Heading
            as="h5"
            sx={{
            color: (t) => t.colors.workHeader,
          }}
          >
            Sept 2010 - Sept 2014
          </Heading>
        </div>
      </Fade>
    </div>
  );
}

const WorkSection = (props, ref) => (
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
      <JobSectionCopper />
      <JobSectionPriceSpider />

      <WorkSideHeading text="EDUCATION" />
      <EducationSection />
    </div>
  </Section>
);

export default React.forwardRef(WorkSection);
