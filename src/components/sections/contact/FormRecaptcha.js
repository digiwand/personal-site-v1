import ReCAPTCHA from 'react-google-recaptcha';
import PROP_TYPE from 'constants/prop-types';

const reCaptchaV2Key = process.env.NEXT_PUBLIC_G_RECAPTCHA_V2_KEY;

const propTypes = {
  recaptchaRef: PROP_TYPE.REF.isRequired,
};

/**
 * Notes:
 * - EmailJS does not support reCAPTCHA v3. Only reCAPTCHA v2.
 * - We can make recaptcha invisibile, but we still need to provide the Privacy Policy and TOS messages
 *   @see {@link https://developers.google.com/recaptcha/docs/faq}
 */
function FormRecaptcha({ recaptchaRef }) {
  return (
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
            right: '0!important',
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
}

FormRecaptcha.propTypes = propTypes;

export default FormRecaptcha;
