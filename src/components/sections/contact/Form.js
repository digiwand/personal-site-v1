import emailjs from 'emailjs-com';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'theme-ui';

import { ContactFormInput, ContactFormTextArea } from 'components/sections/contact/FormInputs';
import FormSentMessage from 'components/sections/contact/FormSentMessage';
import FormErrorMessage from 'components/sections/contact/FormError';

const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;

function ContactForm() {
  const [hasError, setHasError] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (hasSent) { return; }

    const body = {
      sender_name: name,
      sender_email: email,
      message,
    };

    emailjs.send(serviceID, templateID, body, userID).then((res) => {
      if (res.status !== 200) { /** todo: add error tracking */ return handleSendError(); }

      return handleSendSuccess();
    }, (err) => handleSendError(err));
  };

  function handleSendSuccess() {
    setHasError(false);
    setHasSent(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleSendError() {
    setHasError(true);
  }

  return (
    <div sx={{
      position: 'relative',
    }}
    >
      <form
        as="form"
        /** @see {@https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion} */
        autoComplete="new-password"
        onSubmit={(e) => handleSend(e)}
        has-sent={String(hasSent)}
        sx={{
          transition: 'opacity 0.3s',

          '&[has-sent="true"]': {
            opacity: 0,
            pointerEvents: 'none',
          },
        }}
      >
        <Fade bottom>
          <ContactFormInput
            name="contact-form-name"
            label="Name"
            type="name"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />
        </Fade>

        <Fade bottom delay={200}>
          <ContactFormInput
            name="contact-form-email"
            label="Email"
            type="email"
            value={email}
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

        <div sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        >
          <Fade bottom delay={800}>
            <Button>Send</Button>
          </Fade>
        </div>
      </form>

      <FormSentMessage isVisible={String(hasSent)} />
      <FormErrorMessage isVisible={hasError} />
    </div>
  );
}

export default ContactForm;
