import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import Section from 'components/sections/Section';

const AboutSection = (props, ref) => (
  <Section
    id="about"
    ref={ref}
    sx={{
      minHeight: '100vh',
    }}
  >
    <Fade bottom>
      <Themed.h3>
        About
      </Themed.h3>
    </Fade>
    <Fade bottom delay={420}>
      <Themed.p sx={{ maxWidth: '560rem' }}>
        <br />
        Hello! I&apos;m Ariella Vu.
        <br />
        <br />
        I&apos;ve been a professional software engineer for over 6 years now. I started my education and career as a full-stack
        programmer. Now I specialize in building websites using JavaScript Frameworks (React, Ember, and Angular 1.x).
        <br />
        <br />
        I&apos;m a native of California. For over the last 3 years, I&apos;ve worked as a digital nomad. I&apos;ve considered
        myself a nomad since I left my &quot;home&quot; at 14 years old. Fortunately, I&apos;ve now explored over 30 countries.
        Overcoming changes and challenges is wired in me.
        <br />
        <br />
        Some of my strengths include problem-solving, adapting, writing clean-code, being detail-oriented, and teamwork.
        Besides programming and traveling, my passions include yoga, hiking, indoor rock climbing, building new homebases
        around the world, and personal development.
      </Themed.p>
    </Fade>
  </Section>
);

export default React.forwardRef(AboutSection);
