import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import ResumeButton from 'components/resume-button/ResumeButton';
import Section from 'components/sections/Section';
// import ProfileSVG from 'components/svg/profile';

import { SECTION_ID } from 'constants/section';

function HomeSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.HOME}
      ref={ref}
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >

      {/* <ProfileSVG sx={(theme) => ({
        position: 'absolute',
        right: '8vh',
        bottom: '45rem',

        g: {
          fill: '#ababab',
        },
      })}
      /> */}

      <div sx={{
        variant: 'glass',
        display: 'inline-flex',
        flexDirection: 'column',
        px: [3, 4, '86rem'],
        py: [5, 5, '74rem'],
        margin: '0 auto',
        zIndex: '1',
      }}
      >
        <Fade bottom>
          <Themed.h2 sx={{
            variant: 'text.shadow',
            letterSpacing: '2.4rem',
            color: (t) => t.colors.homeHello,
          }}
          >
            Hello, I&apos;m

          </Themed.h2>
        </Fade>
        <Fade bottom delay={600}>
          <span
            className="NavHeader_profileLogo"
            sx={{
              fontFamily: 'profile',
              fontSize: [8, 9, 9],
              pt: [4, 3, 4],
              pb: [3, null, null],
              display: 'inline-block',
              // fix font from chopping off
              pl: 2,
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
            I&apos;m a web developer who&apos;s passionate about clean code, delightful user
            experiences, and efficiency. Currently exploring new opportunities using React or Ember.js.
          </Themed.p>
        </Fade>
        <Fade bottom delay={2800}>
          <ResumeButton sx={{ mt: 4 }} />
        </Fade>
      </div>
    </Section>
  );
}

export default React.forwardRef(HomeSection);
