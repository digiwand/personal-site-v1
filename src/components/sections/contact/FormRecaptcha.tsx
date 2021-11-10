import ReCAPTCHA from 'react-google-recaptcha';
import { RefObject } from 'react';

const reCaptchaV2Key = process.env.NEXT_PUBLIC_G_RECAPTCHA_V2_KEY;

/**
 * Notes:
 * - EmailJS does not support reCAPTCHA v3. Only reCAPTCHA v2.
 * - We can make recaptcha invisibile, but we still need to provide the Privacy Policy and TOS messages
 *   @see {@link https://developers.google.com/recaptcha/docs/faq}
 */
function FormRecaptcha({ recaptchaRef } : { recaptchaRef: RefObject<ReCAPTCHA> }) {
  return (
    <div sx={{
      fontSize: 0,
      letterSpacing: '1rem',
      maxWidth: '365rem',
      textAlign: 'right',
      height: 'fit-content',
      pr: [3, 4, 4],
      pt: 1,
      color: (t) => t.colors.contactReCaptcha,
    }}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={reCaptchaV2Key}
        sx={{
          '.grecaptcha-badge': {
            right: '0!important',
            visibility: 'hidden',
          },
        }}
      />
      This site is protected by reCAPTCHA and the
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
}

export default FormRecaptcha;
