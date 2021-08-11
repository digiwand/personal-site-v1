import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Flex,
  Label,
} from 'theme-ui';

import Section from 'components/sections/Section';
import ContactForm from 'components/sections/contact/ContactForm';

/**
 * @todo
 * - spice up
 * - add background
 * - separate left section
 * - possibly add a plant?
 */
const ContactSection = (props, ref) => (
  <Section
    id="contact"
    ref={ref}
    sx={{
      // backgroundImage: 'url("/assets/images/b÷g-flight.jpg")',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}
  >
    <Flex sx={{
      flexDirection: ['column', 'column', 'row'],
      alignItems: ['center', 'center', 'initial'],
    }}
    >
      <div sx={{
        height: '100%',
        minWidth: '245px',
      }}
      >
        <Fade bottom>
          <Label sx={{ justifyContent: 'center' }}>Let&apos;s Connect!</Label>
        </Fade>
      </div>

      <ContactForm />
    </Flex>
  </Section>
);

export default React.forwardRef(ContactSection);
