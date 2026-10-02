import { Inter, Space_Grotesk } from 'next/font/google';
import {
  useCallback, useEffect, useId, useRef, useState,
  type PointerEvent,
} from 'react';
import { createPortal } from 'react-dom';

import { WorkImageConfig } from 'components/sections/work/shared/constants';
import { cn } from 'lib/cn';

import styles from './lightbox.module.css';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lb-display',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-lb-body',
  display: 'swap',
});

const pad = (n: number) => String(n).padStart(2, '0');

function Chevron({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

function SlideMedia({
  config,
  isHiding,
}: {
  config: WorkImageConfig;
  // isHiding enables us to produce a fade-out effect
  isHiding: boolean;
}) {
  const imgType = config.type || 'png';

  return (
    <picture>
      <source
        srcSet={`/images/work/${config.srcName}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/images/work/${config.srcName}.${imgType}`}
        type={`image/${imgType}`}
      />
      <img
        alt={config.alt}
        src={`/images/work/${config.srcName}.${imgType}`}
        decoding="async"
        draggable={false}
        className={cn(isHiding && styles.swap)}
      />
    </picture>
  );
}

interface Props {
  imgConfigs: WorkImageConfig[];
  initialSlideIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

function ImgCarouselModal({
  imgConfigs,
  initialSlideIndex,
  isOpen,
  onClose,
}: Props) {
  const headingId = useId();
  const captionId = useId();
  const count = imgConfigs.length;
  const safeInitial = Math.min(
    Math.max(initialSlideIndex, 0),
    Math.max(count - 1, 0),
  );
  const [activeIndex, setActiveIndex] = useState(safeInitial);
  const [isHiding, setIsHiding] = useState(false);
  const [frameOverflows, setFrameOverflows] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLElement>(null);
  const indexRef = useRef(safeInitial);
  const timerRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);
  const gestureRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((compute: (current: number) => number) => {
    if (count === 0) return;
    const next = compute(indexRef.current);
    if (next === indexRef.current) return;
    indexRef.current = next;

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (reduceMotionRef.current) {
      setActiveIndex(next);
      return;
    }

    setIsHiding(true);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setActiveIndex(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsHiding(false));
      });
    }, 180);
  }, [count]);

  const go = useCallback((delta: number) => {
    goTo((current) => (current + delta + count) % count);
  }, [count, goTo]);

  const jump = useCallback((next: number) => {
    goTo((current) => (next === current ? current : next));
  }, [goTo]);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

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
  }, [activeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    imgConfigs.forEach((config) => {
      const img = new Image();
      img.src = `/images/work/${config.srcName}.webp`;
    });

    return undefined;
  }, [isOpen, imgConfigs]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const pageRoot = document.getElementById('__next');
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('work-lightbox-open');
    pageRoot?.setAttribute('inert', '');

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('work-lightbox-open');
      pageRoot?.removeAttribute('inert');
      previousFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, go]);

  const onPointerDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) {
      gestureRef.current = null;
      return;
    }
    gestureRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: PointerEvent) => {
    const start = gestureRef.current;
    gestureRef.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
  };

  if (!isOpen || count === 0 || typeof document === 'undefined') {
    return null;
  }

  const slide = imgConfigs[activeIndex];

  return createPortal(
    <div
      className={cn(styles.lightbox, displayFont.variable, bodyFont.variable)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      aria-describedby={captionId}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className={styles.close}
        aria-label="Close gallery"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        type="button"
        className={cn(styles.nav, styles.prev)}
        aria-label="Previous image"
        onClick={() => go(-1)}
      >
        <span className={styles.aura} />
        <span className={styles.chev}>
          <Chevron direction="prev" />
        </span>
      </button>
      <button
        type="button"
        className={cn(styles.nav, styles.next)}
        aria-label="Next image"
        onClick={() => go(1)}
      >
        <span className={styles.aura} />
        <span className={styles.chev}>
          <Chevron direction="next" />
        </span>
      </button>

      <div className={styles.stage}>
        <header>
          <h2 id={headingId} className={cn(styles.lbTitle, isHiding && styles.swap)}>
            {slide.companyName}
          </h2>
          <p className={cn(styles.lbRole, isHiding && styles.swap)}>
            {slide.title}
            {' · '}
            {slide.subtitle}
          </p>
        </header>

        <div className={styles.frameWrap}>
          <figure className={styles.frame} ref={frameRef}>
            <SlideMedia config={slide} isHiding={isHiding} />
          </figure>
          {frameOverflows && <div className={styles.scrollFade} aria-hidden="true" />}
        </div>

        <div className={styles.meta}>
          <p id={captionId} className={cn(styles.caption, isHiding && styles.swap)}>
            {slide.alt}
          </p>
          <div className={styles.pager}>
            <div className={styles.tapnav}>
              <button
                type="button"
                className={styles.tapBtn}
                aria-label="Previous image"
                onClick={() => go(-1)}
              >
                <Chevron direction="prev" />
              </button>
              <button
                type="button"
                className={styles.tapBtn}
                aria-label="Next image"
                onClick={() => go(1)}
              >
                <Chevron direction="next" />
              </button>
            </div>
            <div className={styles.dots} role="tablist" aria-label="Choose image">
              {imgConfigs.map((config, i) => (
                <button
                  key={config.srcName}
                  type="button"
                  role="tab"
                  className={cn(styles.dot, i === activeIndex && styles.isActive)}
                  aria-label={`Image ${i + 1}`}
                  aria-selected={i === activeIndex}
                  onClick={() => jump(i)}
                />
              ))}
            </div>
            <div className={cn(styles.count, isHiding && styles.swap)}>
              <b>{pad(activeIndex + 1)}</b>
              {` / ${pad(count)}`}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ImgCarouselModal;
