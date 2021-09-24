import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Themed } from 'theme-ui';

import ResumeButton from 'components/resume-button/ResumeButton';
import Section from 'components/sections/Section';
// import ProfileSVG from 'components/svg/profile';

import { SECTION_ID } from 'constants/section';

/**
 * @todo add when prop to Zoom and set to true when loader is finished to enable to scroll if the user
 * started down on the page
 */
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
      <Zoom delay={600}>
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
          <Themed.h2 sx={{
            variant: 'text.shadow',
            letterSpacing: '2.4rem',
            color: (t) => t.colors.homeHello,
          }}
          >
            <Fade top delay={1600} duration={1400} cascade>
              Hello, I&apos;m
            </Fade>
          </Themed.h2>
          <span
            className="NavHeader_profileLogo"
            sx={{
              fontFamily: 'profile',
              fontSize: ['38rem', 9, 9],
              pt: [4, 3, 4],
              pb: [3, null, null],
              display: 'inline-block',
              // fix font from chopping off
              pl: 2,
            }}
          >
            <Fade delay={3000} duration={2000} cascade>
              Ariella Vu.
            </Fade>
          </span>
          <Themed.p sx={{
            maxWidth: '540rem',
            margin: '23rem auto',
          }}
          >
            <Fade delay={4500}>
              I&apos;m a web developer who&apos;s passionate about clean code, delightful user
              experiences, and efficiency. Currently exploring new opportunities using React or Ember.js.
            </Fade>
          </Themed.p>
          <Zoom delay={6000} duration={800}>
            <ResumeButton sx={{ mt: 4 }} />
          </Zoom>
        </div>
      </Zoom>
    </Section>
  );
}

export default React.forwardRef(HomeSection);
