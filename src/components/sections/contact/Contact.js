import React from 'react';
import Section from 'components/sections/Section';

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <Section id="contact" {...props}
      ref={ref}
      sx={{ backgroundColor: 'lightblue' }}
    >
      <div>
        This is the contact section
      </div>
    </Section>
  );
});

export default ContactSection;