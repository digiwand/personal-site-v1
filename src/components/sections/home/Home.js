import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
// import ProfileSVG from 'components/svg/profile';

import Section from 'components/sections/Section';
import TSParticlesImage from 'components/sections/home/TSParticlesImage';

function HomeSection(props, ref) {
  return (
    <Section
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
      }}
    >
      <div sx={{ position: 'absolute' }} />

      <TSParticlesImage />

      <Fade bottom>
        <Themed.h3>Hello, I&apos;m</Themed.h3>
      </Fade>
      <Fade bottom delay={600}>
        <span
          className="NavHeader_profileLogo"
          sx={{
            fontFamily: '"MarckScript", Ariel',
            fontSize: '58px',
          }}
        >
          Ariella Vu.
        </span>
      </Fade>
      <Fade bottom delay={2100}>
        <Themed.p sx={{ maxWidth: '520px' }}>
          I&apos;m a web developer specializing in React and Ember JavaScript Frameworks. I&apos;m passionate about clean code,
          delightful user experiences, and efficiency. Currently exploring new opportunities.
        </Themed.p>
      </Fade>

      {/* <ProfileSVG sx={(theme) => ({
          position: 'absolute',
          right: '8vh',
          bottom: '40px',

          'g' : {
            fill: `${theme.colors.text}`
          },
        })}
        /> */}
    </Section>
  );
}

export default React.forwardRef(HomeSection);
