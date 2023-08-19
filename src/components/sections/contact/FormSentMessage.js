import { getColor } from '@theme-ui/color';
import PropTypes from 'prop-types';

const propTypes = {
  email: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

const defaultProps = {
  isVisible: false,
};

function FormSentMessage({ isVisible, email }) {
  return (
    <div
      is-visible={String(isVisible)}
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
        p: 4,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s',
        background: (t) => getColor(t, 'inputBg'),

        '&[is-visible="true"]': {
          opacity: 1,
          pointerEvents: 'initial',
        },
      }}
    >
      <h3>Email sent!</h3>
      <div>
        <br />
        <br />
        Thank you! I should get back to you as soon as I can if you are expecting a response
        {email && ` to ${email}`}
        .
        <br />
        <br />
        <br />
        <h3 sx={{ textAlign: 'center' }}>
          Best wishes,
        </h3>
        <h3 sx={{ textAlign: ['center', 'center', 'left'], pt: 2, display: 'block' }}>
          Ariella
        </h3>
      </div>
    </div>
  );
}

FormSentMessage.propTypes = propTypes;
FormSentMessage.defaultProps = defaultProps;

export default FormSentMessage;
