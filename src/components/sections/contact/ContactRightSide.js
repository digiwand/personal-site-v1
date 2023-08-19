import { getColor } from '@theme-ui/color';
import Fade from 'react-reveal/Fade';
import ContactForm from 'components/sections/contact/Form';
import SOCIAL from 'constants/social';

function ContactRightSide() {
  return (
    <div sx={{
      flex: '3 1 auto',
      transition: 'width 0.3s',
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
        <h3 sx={{ color: (t) => getColor(t, 'contactSubHeader'), pb: 3 }}>
          <Fade delay={200}>
            Send me a message
          </Fade>
        </h3>

        <br />

        <Fade>
          <h6
            sx={{
            pb: 4,
            color: (t) => `${getColor(t, 'contactText')}`,
          }}
          >
            Email me here or directly at
            {' '}
            <a
              href={SOCIAL.email.url}
              sx={{
                variant: 'text.link',
              }}
            >
              ariellavu@gmail.com
            </a>
          </h6>
        </Fade>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactRightSide;
