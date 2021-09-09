const formTransition = '0.3s';
const inputHeight = '42';
const inputBorder = '2';
const inputPadding = '10rem';

const forms = {
  input: {
    fontFamily: 'Poppins',
    fontSize: '17rem',
    fontWeight: '300',
    border: '0',
    boxShadow: '0px 8px 8px 0 rgb(31 38 135 / 12%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '2px',
    background: (t) => `${t.colors.inputBg}`,
    height: `${inputHeight}rem`,
    padding: inputPadding,
    borderBottom: `${inputBorder}rem solid transparent`,
    transition: `border-color ${formTransition}`,

    '&:focus': {
      outline: 'none',
      borderColor: (t) => `${t.colors.text}`,
    },
  },

  textarea: {
    fontFamily: 'Poppins',
    fontSize: '20rem',
    fontWeight: '300',
    border: '0',
    boxShadow: '0px 8px 8px 0 rgb(31 38 135 / 12%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '2px',
    padding: inputPadding,
    transition: `border-color ${formTransition}`,
    background: (t) => `${t.colors.inputBg}`,
    borderBottom: `${inputBorder}rem solid transparent`,

    '&:focus': {
      outline: 'none',
      borderColor: (t) => `${t.colors.text}`,
    },
  },
};

export default forms;
