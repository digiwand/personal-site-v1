import React from 'react';
import Fade from 'react-reveal/Fade';
import { Flex, Image, Themed } from 'theme-ui';

import OffsetFrame from 'components/common/OffsetFrame';
import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';

const AboutSection = (props, ref) => (
  <Section
    id={SECTION_ID.ABOUT}
    ref={ref}
    sx={{
      minHeight: '80vh',
      background: (t) => `${t.colors.aboutBg}`,
      pt: [6, 6, 0],
    }}
  >
    <Flex sx={{
      flexDirection: ['column-reverse', 'column-reverse', 'row'],
    }}
    >
      <div sx={{
        flex: '1 1 auto',
        pr: [0, 0, 6],
        pt: [6, 6, 0],
      }}
      >
        <Fade bottom>
          <Themed.h3 sx={{ pb: 1, color: (t) => `${t.colors.aboutHeader}` }}>
            ABOUT
          </Themed.h3>
        </Fade>
        <Fade bottom delay={420}>
          <Themed.p sx={{
            maxWidth: ['initial', 'initial', '520rem'],
            color: (t) => `${t.colors.aboutText}`,
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
      }}
      >
        <OffsetFrame sx={{ maxWidth: '390rem', width: ['80%', '100%', '100%'], display: ['flex', 'flex', 'inline-block'] }}>
          <Image
            alt="Profile Picture"
            src="/images/profile.jpg"
            variant="framed"
            width="390"
            height="461.33"
            sx={{ zIndex: 1 }}
          />
        </OffsetFrame>
      </div>
    </Flex>
  </Section>
);

export default React.forwardRef(AboutSection);
