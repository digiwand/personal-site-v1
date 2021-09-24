import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import Section from 'components/sections/Section';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';

function EducationSection() {
  return (
    <div sx={{
      gridColumnStart: 'content-start',
      maxWidth: '850rem',
    }}
    >
      <Fade>
        <div sx={{
          variant: 'glass',
          py: 5,
          px: 4,
        }}
        >
          <Themed.h2 sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: 'block',
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => t.colors.workHeader,
          }}
          >
            B.A.S. Computer Science
          </Themed.h2>
          <Themed.h4 sx={{
            display: 'block',
            color: (t) => t.colors.workSubHeader,
            pt: 4,
            pb: 2,
          }}
          >
            University of California Davis
          </Themed.h4>
          <Themed.h5 sx={{
            color: (t) => t.colors.workHeader,
          }}
          >
            Sept 2010 - Sept 2014
          </Themed.h5>
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
      <Themed.h3
        sx={{
          variant: 'text.sideHeading',
          gridColumnStart: 'label-start',
          pt: [0, 0, 5],
          pb: [0, 0, 5],
        }}
      >
        WORK EXPERIENCE
      </Themed.h3>
      <JobSectionCopper />
      <JobSectionPriceSpider />

      <Themed.h3
        sx={{
          variant: 'text.sideHeading',
          gridColumnStart: 'label-start',
          pt: [0, 0, 5],
        }}
      >
        EDUCATION
      </Themed.h3>
      <EducationSection />
    </div>
  </Section>
);

export default React.forwardRef(WorkSection);
