import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ContactForm from 'components/sections/contact/Form';

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
      }}
      >
        <Fade>
          <Themed.h3>
            Send me a message
          </Themed.h3>
        </Fade>

        <br />

        <Fade>
          <Themed.h6 sx={{ pb: 4 }}>
            Email me here or directly at ariellavu@gmail.com
          </Themed.h6>
        </Fade>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactRightSide;
