import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Text } from 'theme-ui';

import ResumeButton from 'components/resume-button/ResumeButton';
import Section from 'components/sections/Section';
import JobSectionCopper from 'components/sections/work/job-section/Copper';
import JobSectionPriceSpider from 'components/sections/work/job-section/PriceSpider';

const WorkSection = (props, ref) => (
  <Section
    id="work"
    ref={ref}
  >
    <Fade bottom>
      <Text variant="sectionHeading">
        WORK
      </Text>

      <div sx={{ textAlign: 'center', pb: 5 }}>
        <ResumeButton />
        <Button sx={{ ml: '100rem' }}>
          LINKEDIN
        </Button>
      </div>

      <JobSectionCopper />

      <JobSectionPriceSpider />

    </Fade>
  </Section>
);

export default React.forwardRef(WorkSection);
