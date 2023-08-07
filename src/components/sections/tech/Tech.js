import { getColor } from '@theme-ui/color';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Heading } from 'theme-ui';

import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';
import TechCarousel from 'components/sections/tech/Carousel';

function TechSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.TECH}
      ref={ref}
      sx={{
        background: (t) => getColor(t, 'techBg'),
        minHeight: '0',
        py: [5, 6, 6],
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <Fade>
        <Heading
          as="h3"
          sx={{
            color: (t) => getColor(t, 'homeHello'),
            display: 'block',
            textAlign: 'center',
            pt: [4, 0, 0],
          }}
        >
          RECENT TECHNOLOGIES
        </Heading>
      </Fade>

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
    </Section>
  );
}

export default React.forwardRef(TechSection);
