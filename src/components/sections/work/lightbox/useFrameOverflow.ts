import { useEffect, useState, type RefObject } from 'react';

/** True when the framed screenshot overflows and the user has not reached the end. */
export function useFrameOverflow(
  frameRef: RefObject<HTMLElement | null>,
  index: number,
  isOpen: boolean,
) {
  const [frameOverflows, setFrameOverflows] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !isOpen) return undefined;

    frame.scrollTop = 0;

    const update = () => {
      const overflows = frame.scrollHeight > frame.clientHeight + 2;
      const atEnd = frame.scrollTop + frame.clientHeight >= frame.scrollHeight - 12;
      const next = overflows && !atEnd;
      setFrameOverflows((prev) => (prev === next ? prev : next));
    };

    update();
    frame.addEventListener('scroll', update, { passive: true });
    const img = frame.querySelector('img');
    img?.addEventListener('load', update);

    return () => {
      frame.removeEventListener('scroll', update);
      img?.removeEventListener('load', update);
    };
  }, [frameRef, index, isOpen]);

  return frameOverflows;
}
