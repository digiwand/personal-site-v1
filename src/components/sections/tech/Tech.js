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
        background: (t) => t.colors.glassBg,
        minHeight: '0',
        py: [5, 6, 6],
        zIndex: 1,
      }}
    >
      <Fade>
        <Themed.h3
          sx={{
            color: (t) => t.colors.homeHello,
            textShadow: (t) => t.colors.textShadow,
            display: 'block',
            textAlign: 'center',
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
