import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import Section from 'components/sections/Section';
import TSParticlesImage from 'components/sections/home/TSParticlesImage';

const HomeSection = React.forwardRef((props, ref) => {

  return (
    <Section id="home" {...props} ref={ref}>

      <TSParticlesImage />

      <Fade bottom>
        <Themed.h3>Hello, I'm</Themed.h3>
      </Fade>
      <Fade bottom delay={600}>
        <span className="NavHeader_profileLogo" sx={{
          fontFamily: '"MarckScript", Ariel',
          fontSize: "58px",
        }}>
          Ariella Vu.
        </span>
      </Fade>
      <Fade bottom delay={2100}>
        <Themed.h3>I'm a software engineer.</Themed.h3>
      </Fade>
    </Section>
  );
});

export default HomeSection;
