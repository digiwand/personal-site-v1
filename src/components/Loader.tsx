import { useEffect } from 'react';
import { getColor } from '@theme-ui/color'
import anime from 'animejs';

interface Props {
  finishLoading: () => void;
};

const Loader = ({ finishLoading }: Props) => {
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

export default Loader;
