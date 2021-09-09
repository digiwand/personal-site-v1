import React from 'react';
import Fade from 'react-reveal/Fade';
import { Text, Themed } from 'theme-ui';

import Section from 'components/sections/Section';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';

function EducationSection() {
  return (
    <div sx={{
      gridColumnStart: 'content-start',
      maxWidth: '850rem',
      variant: 'glass',
      py: 5,
      px: 4,
    }}
    >
      <Themed.h2 sx={{
        fontFamily: 'heading2',
        display: 'block',
        pb: 2,
        color: (t) => t.colors.workHeader,
      }}
      >
        B.A.S. Computer Science
      </Themed.h2>
      <Themed.h4 sx={{
        color: (t) => t.colors.workSubHeader,
      }}
      >
        University of California Davis
      </Themed.h4>
      <Themed.h5 sx={{ pl: 2, color: (t) => t.colors.workSubHeader }}>
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
  >
    {/* <Fade> */}

    <div sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', 'auto', '[label-start] 1fr [content-start] 2fr [end]'],
      gridTemplateRows: 'auto auto',
      columnGap: ['0', '0', '20rem'],
      rowGap: '80rem',
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
