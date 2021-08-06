import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import Section from 'components/sections/Section';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <Section id="about" {...props} 
      ref={ref}
      sx={{ }}
    >
      <Fade bottom>
        <Themed.h3>
          About
        </Themed.h3>
        <Fade bottom delay={3400}>
          <Themed.p sx={{ maxWidth: '560rem' }}>
            <br />
            Hello! I'm Ariella Vu.
            <br />
            <br />
            I've been a professional software engineer for over 6 years now. I started my education and career as a full-stack programmer. 
            Now I specialize in building websites using JavaScript Frameworks (React, Ember, and Angular 1.x). 
            <br />
            <br />
            I'm a native of California. For over the last 3 years, I've worked as a digital nomad. That's right. I have no homebase. In fact, I left my "home" at 14 years old. Fortunately, I've now explored over 30 countries. Overcoming changes and challenges is wired in me.
            <br />
            <br />
            Some of my strengths include problem-solving, adapting, writing clean-code, being detail-oriented, and teamwork. Besides programming and traveling, my passions include yoga, hiking, indoor rock climbing, building new homebases around the world, and personal development.
          </Themed.p>
        </Fade>
      </Fade>
    </Section>
  );
});

export default AboutSection;