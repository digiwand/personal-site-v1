import React from 'react';
import Fade from 'react-reveal/Fade';
import { Text } from 'theme-ui';

import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';
import TechCarousel from 'components/sections/tech/Carousel';

function TechSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.TECH}
      ref={ref}
      sx={{
        background: (t) => `${t.colors.techBg}`,
        minHeight: '0',
        py: [5, 6, 6],
        zIndex: 1,
      }}
    >
      <Fade>
        <Text
          variant="sectionHeading"
          sx={{
            color: (t) => `${t.colors.techHeader}`,
          }}
        >
          RECENT TECHNOLOGIES
        </Text>
      </Fade>

      <Fade bottom cascade>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 5,
            pb: 5,
          }}
        >
          <TechCarousel />
        </div>
      </Fade>
    </Section>
  );
}

export default React.forwardRef(TechSection);
