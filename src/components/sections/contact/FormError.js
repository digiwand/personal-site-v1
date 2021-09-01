import SOCIAL from 'constants/social';

function FormErrorMessage({ isVisible }) {
  return (
    <div
      is-visible={String(isVisible)}
      sx={{
        color: (t) => t.colors.error,
        position: 'absolute',
        opacity: 0,
        top: '100%',
        right: '0',
        pt: [3, 3, 4],
        left: ['0', '0', 'initial'],
        whiteSpace: ['initial', 'initial', 'nowrap'],
        transition: 'opacity 0.3s',

        '&[is-visible="true"]': {
          opacity: 1,
        },
      }}
    >
      Sorry. An error has occured. Please retry or email me directly at
      {' '}
      <a
        href={SOCIAL.email.url}
        sx={{
          variant: 'text.link',
        }}
      >
        ariellavu@gmail.com
      </a>
    </div>
  );
}

export default FormErrorMessage;
