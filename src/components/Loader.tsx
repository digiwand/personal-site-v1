import { useEffect } from 'react';
import anime from 'animejs';

interface Props {
  finishLoading: () => void;
}

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
      className="Loader fixed top-0 left-0 w-full h-full bg-[var(--theme-background)]"
    />
  );
};

export default Loader;
