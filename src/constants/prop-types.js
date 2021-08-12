import PropTypes from 'prop-types';

/**
 * Custom PropTypes
 */
const PROP_TYPE = {
  REF: PropTypes.shape({ current: PropTypes.objectOf(PropTypes.shape) }),
};

export default PROP_TYPE;
