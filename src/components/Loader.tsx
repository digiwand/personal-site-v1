import { useEffect } from 'react';
import anime from 'animejs';

interface Props {
  finishLoading: () => void;
}

function Loader({ finishLoading }: Props) {
  useEffect(() => {
    const animation = anime({
      targets: '.Loader',
      opacity: 100,
      duration: 600,
      easing: 'linear',
      complete: () => finishLoading(),
    });

    return () => {
      animation.pause();
    };
  }, [finishLoading]);

  return (
    <div className="Loader fixed top-0 left-0 w-full h-full bg-[var(--theme-background)]" />
  );
}

export default Loader;
