import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasSent, setHasSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    // console.log('sending');

    const data = {
      name,
      email,
      message,
    };

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log('Response received');

      if (res.status === 200) {
        // console.log('Response succeeded!');
        setHasSent(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  return (
    <Box
      as="form"
      onSubmit={(e) => handleSend(e)}
      isSubmitted={hasSent}
      sx={{

      }}
    >
      <Fade bottom>
        <ContactFormInput
          name="contact-form-name"
          label="Name"
          type="name"
          onChange={(e) => { setName(e.target.value); }}
        />
      </Fade>

      <Fade bottom delay={200}>
        <ContactFormInput
          name="contact-form-email"
          label="Email"
          type="email"
          onChange={(e) => { setEmail(e.target.value); }}
        />
      </Fade>

      <Fade bottom delay={400}>
        <ContactFormTextArea
          name="contact-form-message"
          label="Message"
          type="message"
          onChange={(e) => { setMessage(e.target.value); }}
        />
      </Fade>

      <Fade bottom delay={1000}>
        <Button sx={{ float: 'right' }}>Send</Button>
      </Fade>
    </Box>
  );
}

export default ContactForm;
