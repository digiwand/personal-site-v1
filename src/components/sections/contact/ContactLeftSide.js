import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ContactSocialIconButtons from 'components/sections/contact/SocialIconButtons';

function ContactLeftSide() {
  return (
    <div sx={{
      height: '100%',
      flex: '1 0 25%',
      maxWidth: '680rem',
      width: ['100%', '100%', '25%'],
    }}
    >
      <Fade>
        <Themed.h3>
          Let&apos;s connect!
        </Themed.h3>
      </Fade>

      <br />

      <Fade>
        <Themed.h6>
          Working remotely since 2018
        </Themed.h6>
      </Fade>

      <ContactSocialIconButtons />
    </div>
  );
}

export default ContactLeftSide;
