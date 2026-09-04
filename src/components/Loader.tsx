import { useEffect } from 'react';

interface Props {
  finishLoading: () => void;
}

const Loader = ({ finishLoading }: Props) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(finishLoading, 600);
    return () => window.clearTimeout(timeoutId);
  // Parent passes an inline callback each render; this splash is one-shot.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full bg-[var(--theme-background)] animate-loader-fade-out"
    />
  );
};

export default Loader;
