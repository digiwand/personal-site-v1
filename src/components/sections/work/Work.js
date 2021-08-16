import React from 'react';
import Fade from 'react-reveal/Fade';
import { Text, Themed } from 'theme-ui';
import Section from 'components/sections/Section';
import SVGPriceSpider from 'components/svg/work/pricespider';
import SVGCopperCRM from 'components/svg/work/coppercrm';

const WorkSection = (props, ref) => (
  <Section
    id="work"
    ref={ref}
  >
    <Fade bottom>
      <Text variant="sectionHeading">
        Work
      </Text>

      <div sx={{
        position: 'relative',
        border: '4px double #ccc',
        borderRadius: '2rem',
        p: '40rem',
        mb: 5,
      }}
      >
        <SVGCopperCRM
          sx={(theme) => ({
            transition: 'translate 0.3s, width 0.3s',
            height: ['32rem', '32rem', '32rem'],
            background: `${theme.colors.background}`,
            position: 'absolute',
            transform: ['translateY(-53rem)', 'translateY(-53rem)', 'translateY(-53rem)'],
            left: '10rem',
            px: '20rem',
          })}
        />
        <Themed.h4>
          Senior Software Engineer
          {' '}
          <small>(Client-Side)</small>
        </Themed.h4>
        <Themed.h5>
          August 2016 - April 2021
        </Themed.h5>
        <p />
      </div>

      <div sx={{
        position: 'relative',
        border: '4px double #ccc',
        borderRadius: '2rem',
        p: '40rem',
      }}
      >
        <SVGPriceSpider
          sx={(theme) => ({
            transition: 'translate 0.3s, width 0.3s',
            height: ['32rem', '32rem', '32rem'],
            background: `${theme.colors.background}`,
            position: 'absolute',
            transform: ['translateY(-53rem)', 'translateY(-53rem)', 'translateY(-53rem)'],
            left: '10rem',
            px: '20rem',
          })}
        />
        <Themed.h4>
          Software Engineer
          {' '}
          <small>(Full-Stack)</small>
        </Themed.h4>
        <Themed.h5>
          February 2015 - June 2016
        </Themed.h5>
        <p />
      </div>
    </Fade>
  </Section>
);

export default React.forwardRef(WorkSection);
