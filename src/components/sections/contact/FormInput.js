import PropTypes from 'prop-types';
import { Input } from 'theme-ui';

const inputHeight = 42;
const inputBorder = 2;
const inputPadding = 10;
const labelPadding = 18;

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

/**
 * React has an outstanding bug which prevents controlled inputs from filling with autofill, so we need to disable it.
 * @see {@link https://github.com/facebook/react/issues/15739}
 * @see {@link @see {@https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion}}
 */
function ContactFormInput({
  name, label, type, value, onChange,
}) {
  return (
    <div
      sx={{
        position: 'relative',
        paddingTop: `${labelPadding}rem`,
        pb: 2,
      }}
    >
      <Input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        mb={3}
        autofillBackgroundColor="inputAutofill"
        autoComplete="off"
        placeholder=" "
        required
        sx={{
          '&:focus ~ label': { transform: 'translate(0, -19rem) scale(0.7)' },
          '&:not(:placeholder-shown) ~ label': { transform: 'translate(0, -19rem) scale(0.7)' },
        }}
      />

      <label
        htmlFor={name}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: '20rem',
          fontWeight: '300',
          fontFamily: 'barlow',
          transition: 'transform .12s',
          lineHeight: `${inputHeight - inputBorder}rem`,
          transform: `translate(${inputPadding}rem, ${labelPadding}rem)`,
        }}
      >
        {label}
      </label>
    </div>
  );
}

ContactFormInput.propTypes = propTypes;

export default ContactFormInput;
