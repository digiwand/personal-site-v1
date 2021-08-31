import PropTypes from 'prop-types';
import { Input, Textarea } from 'theme-ui';

const formTransition = 'transform 0.3s, font-size 0.3s';
const inputHeight = '42';
const inputBorder = '2';
const inputPadding = '10rem';
const paddingForLabel = '18rem';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const labelFocusSx = {
  transform: 'translate(0, -19rem)',
  fontSize: '14rem',
  fontWeight: '500',
};

export function ContactFormInput({
  name, label, type, onChange,
}) {
  return (
    <div sx={{ position: 'relative', paddingTop: paddingForLabel, pb: 2 }}>
      <Input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        mb={3}
        required
        placeholder=" "
        sx={{
          '&:focus ~ label': labelFocusSx,
          '&:not(:placeholder-shown) ~ label': labelFocusSx,
        }}
      />

      <label
        htmlFor="contact-form-name"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: '20rem',
          fontWeight: '300',
          transition: `${formTransition}`,
          lineHeight: `${inputHeight - inputBorder}rem`,
          transform: `translate(${inputPadding}, ${paddingForLabel})`,
        }}
      >
        {label}
      </label>
    </div>
  );
}

export function ContactFormTextArea({
  name, label, type, onChange,
}) {
  return (
    <div sx={{ position: 'relative', paddingTop: paddingForLabel, pb: 2 }}>
      <Textarea
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        mb={3}
        rows={5}
        required
        sx={{
          '&:focus ~ label': labelFocusSx,
          '&:valid ~ label': labelFocusSx,
        }}
      />

      <label
        htmlFor="contact-form-name"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: '20rem',
          fontWeight: '300',
          transition: `${formTransition}`,
          lineHeight: `${inputHeight - inputBorder}rem`,
          transform: `translate(${inputPadding}, ${paddingForLabel})`,
        }}
      >
        {label}
      </label>
    </div>
  );
}

ContactFormInput.propTypes = propTypes;
ContactFormTextArea.propTypes = propTypes;
