import { getColor } from '@theme-ui/color'
import type { Theme } from 'theme-ui';

const formTransition = '0.3s';
const inputHeight = '42';
const inputBorder = '2';
const inputPadding = '10rem';

const forms: Theme['forms'] = {
  input: {
    fontFamily: 'body',
    fontSize: '17rem',
    fontWeight: '300',
    border: '0',
    boxShadow: '0rem 8rem 8rem 0 rgb(31 38 135 / 12%)',
    backdropFilter: 'blur(4rem)',
    borderRadius: '2rem',
    background: (t) => `${getColor(t, 'inputBg')}`,
    height: `${inputHeight}rem`,
    padding: inputPadding,
    borderBottom: `${inputBorder}rem solid transparent`,
    transition: `border-color ${formTransition}`,

    '&:focus': {
      outline: 'none',
      borderColor: (t) => `${getColor(t, 'text')}`,
    },
  },

  textarea: {
    fontFamily: 'body',
    fontSize: '20rem',
    fontWeight: '300',
    border: '0',
    boxShadow: '0 8rem 8rem 0 rgb(31 38 135 / 12%)',
    backdropFilter: 'blur(4px)',
    borderRadius: '2rem',
    padding: inputPadding,
    transition: `border-color ${formTransition}`,
    background: (t) => `${getColor(t, 'inputBg')}`,
    borderBottom: `${inputBorder}rem solid transparent`,

    '&:focus': {
      outline: 'none',
      borderColor: (t) => `${getColor(t, 'text')}`,
    },
  },
};

export default forms;
