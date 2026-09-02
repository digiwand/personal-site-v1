import React from 'react';
import Fade from 'components/animations/Fade';

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
      className="min-h-[80vh] pt-16 sm:pt-128 flex flex-col-reverse land:flex-row"
    >
      <div className="flex-[1_1_auto] pt-8 sm:pt-128 land:pt-16 pb-128 sm:pb-0 pr-16 sm:pr-0 land:pr-128 pl-16 sm:pl-0">
        <Fade>
          <h2 className="text-shadow-theme pt-128 sm:pt-0 pb-32">
            <Fade top duration={300} cascade>
              About
            </Fade>
          </h2>
        </Fade>
        <Fade delay={680} duration={1100}>
          <p className="text-body min-w-auto land:min-w-[310rem] max-w-none land:max-w-[520rem]">
            <br />
            Beginning my career as a full-stack programmer over {yearsCareer}&nbsp;years ago, I&apos;ve specialized
            in crafting web applications (React, Ember, and Angular 1.x).
            <br />
            <br />
            I&apos;m a California native without a homebase. Since I left home at 14, I&apos;ve considered myself
            a nomad. Over the last {yearsNomad}&nbsp;years, I&apos;ve worked remotely. Thankfully, my journey has led me
            to uncover the wonders of more than 40 countries. Overcoming changes and challenges is wired in me.
            <br />
            <br />
            Outside of programming, I enjoy yoga, hiking, scuba diving, 3D printing, and philosophical discussions.
          </p>
        </Fade>
      </div>

      <FrameCircle
        className="flex-[1_1_auto] inline-block justify-center self-center transition-[width] duration-300
          max-w-[330rem] sm:max-w-[390rem] w-[90%] sm:w-full mx-auto sm:mx-0"
      >
        <picture className="!w-[105%] !h-[105%] -top-[12px] -left-[1px]">
          <source srcSet="/images/profile.webp, /images/profile@2x.webp 2x" type="image/webp" />
          <source srcSet="/images/profile.png, /images/profile@2x.png 2x" type="image/png" />
          <img
            alt="Profile Picture"
            src="/images/profile.png"
            width="390"
            height="461.33"
            className="[box-shadow:rgba(120,120,120,0.8)_1rem_1rem_13rem_0rem]
              [filter:var(--theme-about-img-filter)]"
          />
        </picture>
      </FrameCircle>
    </Section>
  );
}

export default React.forwardRef(AboutSection);
