import React from 'react';
import Fade from 'react-reveal/Fade';

import Section from 'components/sections/Section';

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <Section id="contact" {...props}
      ref={ref}
      sx={{ backgroundColor: 'lightblue' }}
    >
      <Fade bottom>
        <div>
          This is the contact section
        </div>
      </Fade>
    </Section>
  );
});

export default ContactSection;