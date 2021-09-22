import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';
import TechCarousel from 'components/sections/tech/Carousel';

function TechSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.TECH}
      ref={ref}
      sx={{
        background: (t) => t.colors.techBg,
        minHeight: '0',
        py: [5, 6, 6],
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <Fade>
        <Themed.h3
          sx={{
            color: (t) => t.colors.homeHello,
            display: 'block',
            textAlign: 'center',
            pt: [4, 0, 0],
          }}
        >
          RECENT TECHNOLOGIES
        </Themed.h3>
      </Fade>

      <Fade bottom cascade>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: [4, 5, 5],
          }}
        >
          <TechCarousel />
        </div>
      </Fade>
    </Section>
  );
}

export default React.forwardRef(TechSection);
