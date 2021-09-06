import React from 'react';
import Fade from 'react-reveal/Fade';
import { Text, Themed } from 'theme-ui';

import Section from 'components/sections/Section';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';

function EducationSection() {
  return (
    <div sx={{ gridColumnStart: 'content-start', maxWidth: '850rem' }}>
      <Themed.h2 sx={{
        fontFamily: 'heading2',
        display: 'block',
        pb: 2,
      }}
      >
        B.A.Sc. Computer Science
      </Themed.h2>
      <Themed.h4>
        University of California Davis
      </Themed.h4>
      <Themed.h5 sx={{ pl: 2, pb: 4 }}>
        /
        {' '}
        September 2010 - September 2014
      </Themed.h5>
    </div>
  );
}

const WorkSection = (props, ref) => (
  <Section
    id="work"
    ref={ref}
    sx={{
      background: (t) => `${t.colors.workBg}`,
      backgroundSize: 'cover',
    }}
  >
    {/* <Fade> */}

    <div sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', 'auto', '[label-start] 1fr [content-start] 2fr [end]'],
      gridTemplateRows: 'auto auto',
      columnGap: ['0', '0', '100rem'],
      rowGap: '20rem',
    }}
    >

      <Text
        variant="sideHeading"
        sx={{
          gridColumnStart: 'label-start',
          pb: 5,
        }}
      >
        WORK EXPERIENCE
      </Text>
      <JobSectionCopper />
      <JobSectionPriceSpider />

      <Text
        variant="sideHeading"
        sx={{
          gridColumnStart: 'label-start',
        }}
      >
        EDUCATION
      </Text>
      <EducationSection />
    </div>
    {/* </Fade> */}
  </Section>
);

export default React.forwardRef(WorkSection);
