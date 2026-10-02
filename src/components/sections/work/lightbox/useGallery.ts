import { useCallback, useEffect, useRef, useState } from 'react';
import { WorkImageConfig } from 'components/sections/work/shared/constants';
import { workImageSrc } from './workImage';

const FADE_MS = 180;

function clampIndex(index: number, count: number): number {
  if (count === 0 || Number.isNaN(index)) return 0;
  return Math.min(Math.max(index, 0), count - 1);
}

export interface Gallery {
  isHiding: boolean;
  index: number;
  count: number;
  slide: WorkImageConfig | undefined;
  go: (delta: number) => void;
  jump: (index: number) => void;
}

/** Tracks the current work screenshot and crossfades to the next one. */
export function useGallery(
  imgConfigs: WorkImageConfig[],
  initialSlideIndex: number,
  isOpen: boolean,
): Gallery {
  const count = imgConfigs.length;
  const safeInitial = clampIndex(initialSlideIndex, count);
  const [index, setIndex] = useState(safeInitial);
  const [isHiding, setIsHiding] = useState(false);
  const indexRef = useRef(safeInitial);
  const timerRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);

  const goTo = useCallback((computeIndex: (current: number) => number) => {
    if (count === 0) return;
    const next = computeIndex(indexRef.current);
    if (next === indexRef.current) return;
    
    indexRef.current = next;

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (reduceMotionRef.current) {
      setIndex(next);
      return;
    }

    setIsHiding(true);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setIndex(next);
      // Paint the faded-out slide before revealing the next one.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsHiding(false));
      });
    }, FADE_MS);
  }, [count]);

  const go = useCallback((delta: number) => {
    goTo((current) => (current + delta + count) % count);
  }, [count, goTo]);

  const jump = useCallback((next: number) => {
    goTo(() => next);
  }, [goTo]);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    imgConfigs.forEach((config) => {
      const img = new Image();
      img.src = workImageSrc(config).webp;
    });
  }, [isOpen, imgConfigs]);

  return {
    index,
    isHiding,
    count,
    slide: imgConfigs[index],
    go,
    jump,
  };
}
