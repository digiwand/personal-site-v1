import { ChangeEventHandler } from 'react';

const inputHeight = 42;
const inputBorder = 2;
const inputPadding = 10;
const labelPadding = 18;

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

function ContactFormTextArea({
  name, label, value, onChange,
}: Props) {
  return (
    <div className="form-field relative pb-8" style={{ paddingTop: labelPadding }}>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-control form-textarea mb-16"
        rows={5}
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

export default ContactFormTextArea;
