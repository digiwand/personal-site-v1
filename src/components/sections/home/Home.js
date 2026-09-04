import React, { useEffect, useRef } from 'react';
import Fade from 'components/animations/Fade';
import Pulse from 'components/animations/Pulse';
import Zoom from 'components/animations/Zoom';

import ResumeButton from 'components/resume-button/ResumeButton';
import Section from 'components/sections/Section';
import SVGAriellaVu from 'components/svg/ariellavu';

import { SECTION_ID } from 'constants/section';
import { drawSvgPaths } from 'lib/drawSvgPaths';
import { useTheme } from 'theme/ThemeProvider';

function HomeSection(props, ref) {
  const { colors } = useTheme();
  const signatureRef = useRef(null);

  useEffect(() => {
    return drawSvgPaths(signatureRef.current, {
      color: colors.svgAriellaVuActive,
    });
  }, [colors.svgAriellaVuActive]);

  return (
    <Section
      id={SECTION_ID.HOME}
      ref={ref}
      className="min-h-screen text-center"
    >
      <Zoom delay={600}>
        <div
          className="u-glass rounded-[10rem] inline-flex flex-col px-16 sm:px-32 land:px-[80rem] py-64 land:py-[80rem] mx-auto z-1"
        >
          <h2 className="text-shadow-theme text-[var(--theme-home-hello)]">
            <Fade top delay={1350} duration={300} cascade>
              Hello, I&apos;m
            </Fade>
          </h2>
          <h1 className="mx-auto py-[42rem] sm:py-[46rem] land:py-[48rem] [&_rect]:w-[20rem] [&_rect]:h-full [&_rect]:inline-block">
            <SVGAriellaVu
              ref={signatureRef}
              id="Home-SVGAriellaVu"
              className="h-[42rem] sm:h-[52rem] land:h-[58rem] transition-[height] duration-[400ms]"
            />
          </h1>
          <Fade delay={1100} duration={1000}>
            <p className="text-body max-w-[535rem] mx-auto pb-[52rem] land:pb-[54rem]">
               I&apos;m a software engineer building secure, maintainable systems and elegant solutions to complex problems.
            </p>
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
