import { Heading } from 'theme-ui';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};
function WorkSideHeading({ text, className }) {
  return (
    <Heading
      as="h3"
      className={className}
      sx={{
        textAlign: ['center', 'center', 'initial'],
        gridColumnStart: 'label-start',
        pt: [0, 0, 5],
        pb: [0, 0, 5],

        '&:before': {
          content: '"— "',
          paddingRight: 2,
          display: ['none', 'none', 'inline-block'],
        },
      }}
    >
      {text}
    </Heading>
  );
}

WorkSideHeading.propTypes = propTypes;

export default WorkSideHeading;
