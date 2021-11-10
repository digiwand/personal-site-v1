import type ReCAPTCHA from 'react-google-recaptcha';

import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Button } from 'theme-ui';

import FormInput from 'components/sections/contact/FormInput';
import FormTextArea from 'components/sections/contact/FormTextArea';
import FormSentMessage from 'components/sections/contact/FormSentMessage';
import FormErrorMessage from 'components/sections/contact/FormError';
import FormRecaptcha from 'components/sections/contact/FormRecaptcha';

const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;

function ContactForm() {
  const [hasError, setHasError] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recaptchaRef = useRef<ReCAPTCHA>();

  const handleSend = async (e) => {
    e.preventDefault();
    setHasError(false);

    if (hasSent) { return; }

    try {
      const token = await recaptchaRef.current.executeAsync();

      const body = {
        sender_name: name,
        sender_email: email,
        message,
        'g-recaptcha-response': token,
      };

      const emailJRes = await emailjs.send(serviceID, templateID, body, userID);
      if (emailJRes.status !== 200) { throw new Error('EmailJS is failing to send the email.'); }

      handleSendSuccess();
    } catch (err) {
      handleSendError();
    }
  };

  function handleSendSuccess() {
    setHasSent(true);
    setName('');
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
          <FormInput
            name="contact-form-name"
            label="Name"
            type="name"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />
        </Fade>

        <Fade bottom delay={200}>
          <FormInput
            name="contact-form-email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </Fade>

        <Fade bottom delay={400}>
          <FormTextArea
            name="contact-form-message"
            label="Message"
            type="message"
            value={message}
            onChange={(e) => { setMessage(e.target.value); }}
          />
        </Fade>

        <div sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pt: [1, 0, 0],
        }}
        >
          <Fade delay={1000}>
            <FormRecaptcha recaptchaRef={recaptchaRef} />
          </Fade>

          <Zoom duration={800} delay={1000}>
            <Button sx={{ flex: '0 0 auto;' }}>
              <span>Send</span>
            </Button>
          </Zoom>
        </div>
      </form>

      <FormSentMessage isVisible={hasSent} email={email} />
      <FormErrorMessage isVisible={hasError} />
    </div>
  );
}

export default ContactForm;
