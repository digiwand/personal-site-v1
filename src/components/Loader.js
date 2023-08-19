import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { getColor } from '@theme-ui/color'

const propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

const Loader = ({ finishLoading }) => {
  const animate = () => {
    anime({
      targets: ['.Loader'],
      opacity: 0,
      duration: 600,
      easing: 'linear',
      complete: () => finishLoading(),
    });
  };

  useEffect(() => {
    animate();
  });

  return (
    <div
      className="Loader"
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: (t) => getColor(t, 'background'),
      }}
    />
  );
};

Loader.propTypes = propTypes;

export default Loader;
