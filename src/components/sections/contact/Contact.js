import React from 'react';
import Fade from 'components/animations/Fade';

import Section from 'components/sections/Section';
import ContactLeftSide from 'components/sections/contact/ContactLeftSide';
import ContactRightSide from 'components/sections/contact/ContactRightSide';

import { SECTION_ID } from 'constants/section';

const reCaptchaV2Key = process.env.NEXT_PUBLIC_G_RECAPTCHA_V2_KEY;

function ContactDivider() {
  return (
    <div
      className="hidden land:flex flex-[0_0_1rem] mx-64 items-center justify-center py-64 land:py-0
        w-[82%] land:w-auto after:content-[''] after:z-1
        after:bg-[var(--theme-contact-divider)] after:w-full land:after:w-[1rem]
        after:h-[1rem] land:after:h-full"
    />
  );
}

const ContactSection = React.forwardRef((props, ref) => (
  <Section
    id={SECTION_ID.CONTACT}
    ref={ref}
    className="min-h-[calc(100vh-260rem)]"
  >
    <Fade>
      <div className="u-glass rounded-[10rem] relative py-64 px-32 sm:px-64">
        <h2 className="text-shadow-theme tracking-[2.4rem] text-[var(--theme-home-hello)] block text-center pb-32">
          <Fade top duration={300} cascade>
            Contact
          </Fade>
        </h2>

        <div className="flex flex-col land:flex-row items-center land:items-stretch">
          <ContactLeftSide />
          {reCaptchaV2Key && (
            <>
              <ContactDivider />
              <ContactRightSide />
            </>
          )}
        </div>
      </div>
    </Fade>
  </Section>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;
