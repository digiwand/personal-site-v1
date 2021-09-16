import React from 'react';
import Fade from 'react-reveal/Fade';
import { Flex, Image, Themed } from 'theme-ui';

import FrameCircle from 'components/common/FrameCircle';
import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';

const AboutSection = (props, ref) => (
  <Section
    id={SECTION_ID.ABOUT}
    ref={ref}
    sx={{
      minHeight: '80vh',
      pt: 6,
    }}
  >
    <Flex sx={{
      flexDirection: ['column-reverse', 'column-reverse', 'row'],
    }}
    >
      <div sx={{
        flex: '1 1 auto',
        pr: [0, 0, 6],
        pt: [2, 6, 3],
        pb: [6, 0, 0],
      }}
      >
        <Fade>
          <Themed.h1 sx={{ pb: 4 }}>
            About
          </Themed.h1>
        </Fade>
        <Fade delay={420}>
          <Themed.p sx={{
            maxWidth: ['initial', 'initial', '520rem'],
            // color: (t) => `${t.colors.aboutText}`,
          }}
          >
            {/* <br />
            Hello! I&apos;m Ariella Vu. */}
            <br />
            I started my career as a full-stack programmer over 6 years ago. Now I specialize in building websites using
            JavaScript Frameworks (React, Ember, and Angular 1.x).
            <br />
            <br />
            I&apos;m a native of California. Over the last 3 years, I&apos;ve worked as a digital nomad. I&apos;ve considered
            myself a nomad since I left my &quot;home&quot; at 14 years old. Fortunately, I&apos;ve now explored over 30
            countries. Overcoming changes and challenges is wired in me.
            <br />
            <br />
            {/* Some of my strengths include problem-solving, adapting, writing clean-code, being detail-oriented, and
            teamwork. */}
            Besides programming and traveling, my passions include yoga, hiking, indoor rock climbing, building new homebases
            around the world, and personal development.
          </Themed.p>
        </Fade>
      </div>

      <div sx={{
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        pb: [6, 0, 0],
      }}
      >
        <FrameCircle sx={{
          maxWidth: '390rem',
          width: ['90%', '100%', '100%'],
          display: ['flex', 'flex', 'inline-block'],
          mx: ['auto', 'initial', 'initial'],
        }}
        >
          <Image
            alt="Profile Picture"
            src="/images/profile.jpg"
            width="390"
            height="461.33"
            sx={{
              zIndex: 1,
              boxShadow: 'rgba(120, 120, 120, 0.8) 1px 1px 13px 0px',
              filter: (t) => t.colors.aboutImgFilter,
            }}
          />
        </FrameCircle>
      </div>
    </Flex>
  </Section>
);

export default React.forwardRef(AboutSection);
