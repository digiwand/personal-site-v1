import Fade from 'react-reveal/Fade';
import {
  Box,
  Button,
} from 'theme-ui';
import { ContactFormInput, ContactFormTextArea } from 'components/sections/contact/FormInputs';

/**
 * @todo
 * - style inputs
 * - add server-side email client (SendGrid?)
 * - update submit button to send email
 * - throttle requests
 * - verify inputs
 * - disable "Send" button if inputs are not all entered
 */
function ContactForm() {
  return (
    <Box
      as="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <Fade bottom>
        <ContactFormInput
          name="contact-form-name"
          label="Name"
          type="name"
        />
      </Fade>

      <Fade bottom delay={200}>
        <ContactFormInput
          name="contact-form-email"
          label="Email"
          type="email"
        />
      </Fade>

      <Fade bottom delay={400}>
        <ContactFormTextArea
          name="contact-form-message"
          label="Message"
          type="message"
        />
      </Fade>

      <Fade bottom delay={1000}>
        <Button sx={{ float: 'right' }}>Send</Button>
      </Fade>
    </Box>
  );
}

export default ContactForm;
