import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ContactForm from 'components/sections/contact/Form';
import SOCIAL from 'constants/social';

function ContactRightSide() {
  return (
    <div sx={{
      transition: 'width 0.3s',
      flex: '3 0 auto',
      width: ['100%', '100%', 'auto'],
    }}
    >
      <div sx={{
        maxWidth: '680rem',
        width: '100%',
        mx: 'auto',
        textAlign: ['center', 'center', 'left'],
      }}
      >
        <Fade>
          <Themed.h3 sx={{ color: (t) => `${t.colors.contactSubHeader}` }}>
            Send me a message
          </Themed.h3>
        </Fade>

        <br />

        <Fade>
          <Themed.h6 sx={{
            pb: 4,
            color: (t) => `${t.colors.contactText}`,
          }}
          >
            Email me here or directly at ariellavu@gmail.com
            {' '}
            <a
              href={SOCIAL.email.url}
              sx={{
                variant: 'text.link',
              }}
            >
              ariellavu@gmail.com
            </a>
          </Themed.h6>
        </Fade>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactRightSide;
