import PropTypes from 'prop-types';

/**
 * Custom PropTypes
 */
const PROP_TYPE = {
  REF: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.node })
  ])),
}

export default PROP_TYPE;