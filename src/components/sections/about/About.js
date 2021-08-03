import React from 'react';
import Fade from 'react-reveal/Fade';

import Section from 'components/sections/Section';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <Section id="about" {...props} 
      ref={ref}
      sx={{backgroundColor: 'lightpink' }}
    >
      <Fade bottom>
        <div>
          This is the about section
        </div>
      </Fade>
    </Section>
  );
});

export default AboutSection;