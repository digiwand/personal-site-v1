import React from 'react';

import Section from 'components/sections/Section';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <Section id="about" {...props} 
      ref={ref}
      sx={{backgroundColor: 'lightpink' }}
    >
      <div>
        This is the about section
      </div>
    </Section>
  );
});

export default AboutSection;