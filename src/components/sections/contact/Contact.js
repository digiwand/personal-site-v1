import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Flex,
  Themed,
} from 'theme-ui';

import Section from 'components/sections/Section';
import ContactLeftSide from 'components/sections/contact/ContactLeftSide';
import ContactRightSide from 'components/sections/contact/ContactRightSide';

import { SECTION_ID } from 'constants/section';

function ContactDivider() {
  return (
    <div
      sx={{
        flex: '0 0 1rem',
        mx: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: [5, 5, 0],
        width: ['82%', '82%', 'auto'],

        '&:after': {
          content: '""',
          zIndex: 1,
          background: (t) => t.colors.contactDivider,
          width: ['100%', '100%', '1rem'],
          height: ['1rem', '1rem', '100%'],
        },
      }}
    />
  );
}

const ContactSection = (props, ref) => (
  <Section
    id={SECTION_ID.CONTACT}
    ref={ref}
    sx={{
      minHeight: 'calc(100vh - 260rem)',
    }}
  >

    <Fade>
      <div
        sx={{
          variant: 'glass',
          position: 'relative',
          py: 5,
          px: [4, 5, 5],
        }}
      >
        <Themed.h1
          sx={{
            variant: 'text.shadow',
            color: (t) => t.colors.homeHello,
            display: 'block',
            textAlign: 'center',
            pb: 4,
          }}
        >
          <Fade top duration={600} cascade>
            Contact
          </Fade>
        </Themed.h1>

        <Flex sx={{
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center', 'center', 'initial'],
        }}
        >

          <ContactLeftSide />
          <ContactDivider />
          <ContactRightSide />

        </Flex>

      </div>
    </Fade>
  </Section>
);

export default React.forwardRef(ContactSection);
