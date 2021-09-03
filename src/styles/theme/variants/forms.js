const formTransition = '0.3s';
const inputHeight = '42';
const inputBorder = '2';
const inputPadding = '10rem';

const forms = {
  input: {
    fontFamily: 'body',
    fontSize: '20rem',
    fontWeight: '300',
    borderRadius: '0',
    border: '0',
    padding: inputPadding,
    height: `${inputHeight}rem`,
    transition: `border-color ${formTransition}`,
    background: (t) => `${t.colors.inputBg}`,
    borderBottom: `${inputBorder}rem solid transparent`,

    '&:focus': {
      outline: 'none',
      borderColor: (t) => `${t.colors.text}`,
    },
  },

  textarea: {
    fontFamily: 'body',
    fontSize: '20rem',
    fontWeight: '300',
    borderRadius: '0',
    border: '0',
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
