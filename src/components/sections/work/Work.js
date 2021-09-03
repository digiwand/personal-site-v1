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
    sx={{
      background: (t) => `${t.colors.backgroundWork}`,
      backgroundSize: 'cover',
    }}
  >
    <Fade>
      <Text variant="sectionHeading">
        — WORK EXPERIENCE —
      </Text>

      <JobSectionCopper />
      <JobSectionPriceSpider />
    </Fade>
  </Section>
);

export default React.forwardRef(WorkSection);
