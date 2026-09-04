import type ReCAPTCHA from 'react-google-recaptcha';

import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import Fade from 'components/animations/Fade';
import Zoom from 'components/animations/Zoom';

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

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasError(false);

    if (hasSent) { return; }

    try {
      const token = await recaptchaRef.current?.executeAsync();

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
    <div className="relative">
      <form
        autoComplete="new-password"
        onSubmit={(e) => handleSend(e)}
        data-sent={String(hasSent)}
        className="transition-opacity duration-300 data-[sent=true]:opacity-0 data-[sent=true]:pointer-events-none"
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
            value={message}
            onChange={(e) => { setMessage(e.target.value); }}
          />
        </Fade>

        <div className="flex justify-end items-center pt-4 sm:pt-0">
          <Fade delay={1000}>
            <FormRecaptcha recaptchaRef={recaptchaRef} />
          </Fade>

          <Zoom duration={800} delay={1000}>
            <button type="submit" className="btn px-16 py-8">
              <span>Send</span>
            </button>
          </Zoom>
        </div>
      </form>

      <FormSentMessage isVisible={hasSent} email={email} />
      <FormErrorMessage isVisible={hasError} />
    </div>
  );
}

export default ContactForm;
