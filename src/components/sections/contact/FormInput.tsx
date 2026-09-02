import { ChangeEventHandler } from 'react';

const inputHeight = 42;
const inputBorder = 2;
const inputPadding = 10;
const labelPadding = 18;

interface Props {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function ContactFormInput({
  name, label, type, value, onChange,
}: Props) {
  return (
    <div className="form-field relative pb-8" style={{ paddingTop: `${labelPadding}rem` }}>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        className="form-control form-input mb-16"
        autoComplete="off"
        placeholder=" "
        required
      />

      <label
        htmlFor={name}
        className="absolute top-0 left-0 text-[20rem] font-light font-barlow transition-transform duration-[120ms]"
        style={{
          lineHeight: `${inputHeight - inputBorder}rem`,
          transform: `translate(${inputPadding}rem, ${labelPadding}rem)`,
        }}
      >
        {label}
      </label>
    </div>
  );
}

export default ContactFormInput;
