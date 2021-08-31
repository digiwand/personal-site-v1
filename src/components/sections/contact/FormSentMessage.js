import { Themed } from 'theme-ui';

function FormSentMessage({ isVisible, email }) {
  return (
    <div
      is-visible={isVisible}
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        background: (t) => t.colors.inputBackground,

        '&[is-visible="true"]': {
          opacity: 1,
          pointerEvents: 'initial',
        },
      }}
    >
      <Themed.h3>Email sent!</Themed.h3>
      <p>
        <br />
        <br />
        Thank you! I should get back to you as soon as I can if you are expecting a response
        {email && ` to ${email}`}
        .
        <br />
        <br />
        <br />
        <Themed.h4 sx={{ textAlign: 'center' }}>
          Best wishes,
        </Themed.h4>
        <Themed.h4 sx={{ textAlign: 'center', pt: 2 }}>
          Ariella
        </Themed.h4>
      </p>
    </div>
  );
}

export default FormSentMessage;
