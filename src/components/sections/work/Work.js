import React from 'react';
import Fade from 'react-reveal/Fade';
import { Text } from 'theme-ui';

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

      <JobSectionCopper />

      <JobSectionPriceSpider />

    </Fade>
  </Section>
);

export default React.forwardRef(WorkSection);
