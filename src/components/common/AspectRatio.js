import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  ratio: PropTypes.string,
};

const defaultProps = {
  ratio: '1/1',
};

/**
 * To use AspectRatio, pass an image element as the "children" prop.
 *
 * "aspect-ratio" css is currently not supported by mobile and other browsers, so we will use a known padding hack to
 * to support aspect ratios for responsive images. The keys to this hack are the height and padding-bottom props.
 */
function AspectRatio({ children, className, ratio }) {
  const Image = React.cloneElement(children, {
    style: {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'top',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: 'rgba(120, 120, 120, 0.8) 1rem 1rem 13rem 0rem',
    },
  });

  return (
    <div
      className={className}
      sx={{
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '0',
        overflow: 'hidden',
        '--aspect-ratio': ratio,
        paddingBottom: 'calc(100%/(var(--aspect-ratio)))',
      }}
    >
      {Image}
    </div>
  );
}

AspectRatio.propTypes = propTypes;
AspectRatio.defaultProps = defaultProps;

export default AspectRatio;
