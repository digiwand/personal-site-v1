import { useEffect, useRef, type RefObject } from 'react';

/**
 * Observes the current nodes of `targets`. The callback always sees the latest
 * closure, and the observer is only recreated when the target list changes.
 */
export function useIntersectionObserver(
  targets: ReadonlyArray<RefObject<Element | null>>,
  onIntersect: (entry: IntersectionObserverEntry) => void,
) {
  const onIntersectRef = useRef(onIntersect);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  });

  useEffect(() => {
    if (targets.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        onIntersectRef.current(entry);
      });
    });

    targets.forEach((target) => {
      if (target.current) {
        observer.observe(target.current);
      }
    });

    return () => observer.disconnect();
  }, [targets]);
}
