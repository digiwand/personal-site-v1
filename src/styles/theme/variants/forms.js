const forms = {
  label: {
    fontSize: 1,
    fontWeight: 'bold',
  },
  input: {
    transition: 'box-shadow 0.3s',
    borderColor: 'gray',

    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
  },
  textarea: {
    transition: 'box-shadow 0.3s',
    borderColor: 'gray',

    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
  },
};

export default forms;
