import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ProfileSVG from 'components/svg/profile';

import Section from 'components/sections/Section';
// import TSParticlesImage from 'components/sections/home/TSParticlesImage';

const HomeSection = React.forwardRef((props, ref) => {

  return (
    <Section id="home" {...props} ref={ref}>

      {/* <TSParticlesImage /> */}

      <Fade bottom>
        <Themed.h3>Hello, I'm</Themed.h3>
      </Fade>
      <Fade bottom delay={600}>
        <span className="NavHeader_profileLogo" sx={{
          fontFamily: '"MarckScript", Ariel',
          fontSize: "58px",
        }}>
          Ariella Vu.
        </span>
      </Fade>
      <Fade bottom delay={2100}>
        <Themed.p sx={{ maxWidth: '480px' }}>
          I'm a web developer specializing in React and Ember JavaScript Frameworks. Currently exploring new opportunities.
        </Themed.p>
      </Fade>

      {/* <ProfileSVG sx={(theme) => ({ 
        position: 'absolute',
        right: '8vh',
        bottom: '40px',

        'g' : {
          fill: `${theme.colors.text}`
        },
       })}
      /> */}
    </Section>
  );
});

export default HomeSection;
