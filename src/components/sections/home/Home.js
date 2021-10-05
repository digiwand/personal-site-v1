import anime from 'animejs';
import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import { Themed, useThemeUI } from 'theme-ui';

import ResumeButton from 'components/resume-button/ResumeButton';
import Section from 'components/sections/Section';
import SVGAriellaVu from 'components/svg/ariellavu';
// import ProfileSVG from 'components/svg/profile';

import { SECTION_ID } from 'constants/section';

/**
 * @todo add when prop to Zoom and set to true when loader is finished to enable to scroll if the user
 * started down on the page
 */
function HomeSection(props, ref) {
  const { theme: { rawColors } } = useThemeUI();

  useEffect(() => {
    const svgPaths = document.querySelectorAll('#Home-SVGAriellaVu path');
    anime({
      targets: svgPaths,
      direction: 'linear',
      duration: 800,
      easing: 'easeInOutSine',
      fill: rawColors.svgAriellaVuActive,
      loop: false,
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: (el, i) => 980 + (i * 52),
    });
  }, [rawColors.svgAriellaVuActive]);

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
            <Fade top delay={1350} duration={300} cascade>
              Hello, I&apos;m
            </Fade>
          </Themed.h2>
          <h1 sx={{
            py: ['42rem', '46rem', '48rem'],
            rect: {
              width: '20rem',
              height: '100%',
              display: 'inline-block',
            },
          }}
          >
            <SVGAriellaVu
              id="Home-SVGAriellaVu"
              sx={{
                height: ['42rem', '52rem', '58rem'],
                transition: 'height 0.4s',
              }}
            />
          </h1>
          <Fade delay={1100} duration={1000}>
            <Themed.p sx={{
              maxWidth: '540rem',
              mx: 'auto',
              pb: ['52rem', '52rem', '54rem'],
            }}
            >
              I&apos;m a web developer who&apos;s passionate about clean code, delightful user
              experiences, and efficiency. Currently exploring new opportunities using React or Ember.js.
            </Themed.p>
          </Fade>
          <Pulse delay={5200} duration={620}>
            <ResumeButton />
          </Pulse>
        </div>
      </Zoom>
    </Section>
  );
}

export default React.forwardRef(HomeSection);
