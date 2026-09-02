import { ChangeEventHandler } from 'react';

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
    <div className="form-field relative pb-8 pt-18">
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
      >
        {label}
      </label>
    </div>
  );
}

export default ContactFormInput;
