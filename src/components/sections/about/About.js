import { getColor } from '@theme-ui/color';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Image } from 'theme-ui';

import FrameCircle from 'components/common/FrameCircle';
import Section from 'components/sections/Section';

import { SECTION_ID } from 'constants/section';

function AboutSection(props, ref) {
  const dateStartNomad = new Date('2018-04-01');
  const dateStartCareer = new Date('2014-09-01');
  const dateNow = new Date();

  const yearsNomad = dateNow.getFullYear() - dateStartNomad.getFullYear();
  const yearsCareer = dateNow.getFullYear() - dateStartCareer.getFullYear();

  return (
    <Section
      id={SECTION_ID.ABOUT}
      ref={ref}
      sx={{
        minHeight: '80vh',
        pt: [3, 6, 6],
        display: 'flex',
        flexDirection: ['column-reverse', 'column-reverse', 'row'],
      }}
    >
      <div sx={{
        flex: '1 1 auto',
        pt: [2, 6, 3],
        pb: [6, 0, 0],
        pr: [3, 0, 6],
        pl: [3, 0, 0],
      }}
      >
        <Fade>
          <h2 sx={{ pt: [6, 0, 0], pb: 4 }}>
            <Fade top duration={300} cascade>
              About
            </Fade>
          </h2>
        </Fade>
        <Fade delay={680} duration={1100}>
          <p
            sx={{
              variant: 'text.body',
              minWidth: ['initial', 'initial', '310rem'],
              maxWidth: ['initial', 'initial', '520rem'],
            }}
          >
            <br />
            Beginning my career as a full-stack programmer over {yearsCareer} years ago, I&apos;ve specialized 
            in crafting web applications (React, Ember, and Angular 1.x).
            <br />
            <br />
            I&apos;m a California native without a homebase. Since I left home at 14, I&apos;ve considered myself
            a nomad. Over the last {yearsNomad} years, I&apos;ve worked remotely. Thankfully, my journey has led me 
            to uncover the wonders of more than 30 countries. Overcoming changes and challenges is wired in me.
            <br />
            <br />
            {/* Some of my strengths include problem-solving, adapting, writing clean-code, being detail-oriented, and
              teamwork. */}
            Besides programming and traveling, my passions include yoga, hiking, scuba diving (newly certified), 
            building new homebases around the world, and personal development.
          </p>
        </Fade>
      </div>

      <FrameCircle sx={{
        flex: '1 1 auto',
        display: 'inline-block',
        justifyContent: 'center',
        alignSelf: 'center',
        transition: 'width 0.3s',
        maxWidth: ['330rem', '390rem', '390rem'],
        width: ['90%', '100%', '100%'],
        mx: ['auto', 'initial', 'initial'],
      }}
      >
        <picture sx={{
          width: '105%!important',
          height: '105%!important',
          top: '-12px',
          left: '-1px',
        }}
        >
          <source srcSet="/images/profile.webp, /images/profile@2x.webp 2x" type="image/webp" />
          <source srcSet="/images/profile.png, /images/profile@2x.png 2x" type="image/png" />
          <Image
            alt="Profile Picture"
            src="/images/profile.png"
            width="390"
            height="461.33"
            sx={{
              boxShadow: 'rgba(120, 120, 120, 0.8) 1rem 1rem 13rem 0rem',
              filter: (t) => getColor(t, 'aboutImgFilter'),
            }}
          />
        </picture>
      </FrameCircle>
    </Section>
)}

export default React.forwardRef(AboutSection);
