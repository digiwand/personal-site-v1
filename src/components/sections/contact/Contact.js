import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Flex,
  Text,
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
        mx: 4,
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

function ContactSectionBackground() {
  return (
    <div sx={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: 0,
      opacity: '0.2',
      background: (t) => t.colors.contactBg,
      backgroundSize: 'cover',
    }}
    />
  );
}

function ContactBoxBackground() {
  return (
    <div sx={{
      position: 'absolute',
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      background: (t) => t.colors.contactBgBox,
      zIndex: '0',
    }}
    />
  );
}

const ContactSection = (props, ref) => (
  <Section
    id={SECTION_ID.CONTACT}
    ref={ref}
    sx={{
      minHeight: 'calc(100vh - 260px)',
      background: (t) => `${t.colors.homeBg}`,
    }}
  >
    <ContactSectionBackground />

    <div sx={{
      position: 'relative',
      py: 5,
      px: [4, 5, 4],
    }}
    >
      <ContactBoxBackground />

      <Fade>
        <Text
          variant="sectionHeading"
          sx={{
            color: (t) => `${t.colors.contactHeader}`,
          }}
        >
          CONTACT
        </Text>
      </Fade>

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
  </Section>
);

export default React.forwardRef(ContactSection);
