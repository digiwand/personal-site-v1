import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from 'theme-ui';

import { ContactFormInput, ContactFormTextArea } from 'components/sections/contact/FormInputs';
import FormSentMessage from 'components/sections/contact/FormSentMessage';
import FormErrorMessage from 'components/sections/contact/FormError';

const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;

/** EmailJS does not support reCAPTCHA v3. Only reCAPTCHA v2. */
const reCaptchaV2Key = process.env.NEXT_PUBLIC_G_RECAPTCHA_V2_KEY;

function ContactForm() {
  const [hasError, setHasError] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recaptchaRef = useRef();

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
      handleSendError(err);
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

  const reCaptcha = (
    <div sx={{
      fontSize: 0,
      textAlign: 'right',
      height: 'fit-content',
      alignSelf: 'flex-end',
      pr: [0, 4, 4],
      color: (t) => t.colors.contactDivider,
    }}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={reCaptchaV2Key}
        sx={{
          '.grecaptcha-badge': {
            visibility: 'hidden',
          },
        }}
      />
      This site is protected by reCAPTCHA and the
      <br />
      {' '}
      Google
      {' '}
      <a href="https://policies.google.com/privacy" sx={{ variant: 'text.link' }}>
        Privacy Policy
      </a>
      {' '}
      and
      {' '}
      <a href="https://policies.google.com/terms" sx={{ variant: 'text.link' }}>
        Terms of Service
      </a>
      {' '}
      apply.
    </div>
  );

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
          {reCaptcha}
          <Fade bottom delay={800}>
            <Button>Send</Button>
          </Fade>
        </div>
      </form>

      <FormSentMessage isVisible={hasSent} email={email} />
      <FormErrorMessage isVisible={hasError} />
    </div>
  );
}

export default ContactForm;
