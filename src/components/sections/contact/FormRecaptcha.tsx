import ReCAPTCHA from 'react-google-recaptcha';
import { RefObject } from 'react';

const reCaptchaV2Key = process.env.NEXT_PUBLIC_G_RECAPTCHA_V2_KEY;

function FormRecaptcha({ recaptchaRef } : { recaptchaRef: RefObject<ReCAPTCHA> }) {
  if (!reCaptchaV2Key) { return null; }

  return (
    <div className="text-[12rem] tracking-[1rem] max-w-[365rem] text-right h-fit pr-16 sm:pr-32 pt-4
      [color:var(--theme-contact-re-captcha)] [&_.grecaptcha-badge]:!right-0 [&_.grecaptcha-badge]:invisible">
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={reCaptchaV2Key}
      />
      This site is protected by reCAPTCHA and the
      {' '}
      Google
      {' '}
      <a href="https://policies.google.com/privacy" className="text-link">
        Privacy Policy
      </a>
      {' '}
      and
      {' '}
      <a href="https://policies.google.com/terms" className="text-link">
        Terms of Service
      </a>
      {' '}
      apply.
    </div>
  );
}

export default FormRecaptcha;
