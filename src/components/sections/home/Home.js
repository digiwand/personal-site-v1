import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
// import ProfileSVG from 'components/svg/profile';

import Section from 'components/sections/Section';
// import TSParticlesImage from 'components/sections/home/TSParticlesImage';

function HomeSectionBackground() {
  return (
    <div sx={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      padding: ['10rem', '10rem', '45rem'],
      left: 0,
      top: 0,
    }}
    >
      <div sx={{
        height: '100%',
        width: '100%',
        background: (t) => `${t.colors.background2}`,
      }}
      />
    </div>
  );
}

function HomeSection(props, ref) {
  return (
    <Section
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <HomeSectionBackground />

      {/* <TSParticlesImage /> */}

      <Fade bottom>
        <Themed.h2>Hello, I&apos;m</Themed.h2>
      </Fade>
      <Fade bottom delay={600}>
        <span
          className="NavHeader_profileLogo"
          sx={{
            fontFamily: 'profile',
            fontSize: 8,
            pt: 3,
            display: 'inline-block',
          }}
        >
          Ariella Vu.
        </span>
      </Fade>
      <Fade bottom delay={1900}>
        <Themed.p sx={{
          maxWidth: '540px',
          margin: '23px auto',
        }}
        >
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
