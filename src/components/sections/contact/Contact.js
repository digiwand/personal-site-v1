import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Flex,
  Text,
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
      minHeight: 'calc(100vh - 260px)',
    }}
  >

    <Fade bottom>
      <Text variant="sectionHeading">
        Contact
      </Text>
    </Fade>

    <Flex sx={{
      flexDirection: ['column', 'column', 'row'],
      alignItems: ['center', 'center', 'initial'],
    }}
    >
      <div sx={{
        height: '100%',
        minWidth: '245px',
        flex: '1 0 25%',
      }}
      >
        <Fade bottom>
          <div sx={{ justifyContent: 'center' }}>
            Email me here or directly at ariellavu@gmail.com
          </div>
        </Fade>
      </div>

      <ContactForm />
    </Flex>
  </Section>
);

export default React.forwardRef(ContactSection);
