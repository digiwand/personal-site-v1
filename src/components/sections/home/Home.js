import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import ResumeButton from 'components/resume-button/ResumeButton';
// import ProfileSVG from 'components/svg/profile';

import Section from 'components/sections/Section';
// import TSParticlesBGMask from 'components/sections/home/TSParticlesBGMask';

import { SECTION_ID } from 'constants/section';

// function HomeSectionBackground() {
//   return (
//     <div sx={{
//       position: 'absolute',
//       height: '100%',
//       width: '100%',
//       left: 0,
//       top: 0,
//     }}
//     >
//       <div sx={{
//         position: 'relative',
//         height: '100%',
//         width: '100%',
//         overflow: 'hidden',
//         opacity: 0.8,
//       }}
//       >
//         <TSParticlesBGMask />
//       </div>

//     </div>
//   );
// }

function HomeSection(props, ref) {
  return (
    <Section
      id={SECTION_ID.HOME}
      ref={ref}
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
        // background: (t) => `${t.colors.homeBg}`,
        background: (t) => `${t.colors.homeBgImage}`,
        backgroundSize: 'cover',
      }}
    >
      {/* <HomeSectionBackground /> */}

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
        background: (t) => `${t.colors.homeBgBox}`,
        display: 'inline-flex',
        flexDirection: 'column',
        px: [3, 4, 5],
        py: 5,
        margin: '0 auto',
        zIndex: '1',
      }}
      >
        <Fade bottom>
          <Themed.h2>Hello, I&apos;m</Themed.h2>
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
            I&apos;m a web developer specializing in React and Ember JavaScript Frameworks and I&apos;m passionate about clean
            code, delightful user experiences, and efficiency. Currently exploring new opportunities.
          </Themed.p>
        </Fade>
        <Fade bottom delay={2200}>
          <ResumeButton sx={{ mt: 3 }} />
        </Fade>
      </div>
    </Section>
  );
}

export default React.forwardRef(HomeSection);
