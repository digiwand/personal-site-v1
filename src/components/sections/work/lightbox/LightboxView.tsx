import { Inter, Space_Grotesk } from 'next/font/google';
import { useId, type PointerEvent, type RefObject } from 'react';

import { WorkImageConfig } from 'components/sections/work/shared/constants';
import { cn } from 'lib/cn';

import type { Gallery } from './useGallery';
import { workImageSrc } from './workImage';
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

/** Adds the fade-out class while the outgoing slide disappears. */
function cnFade(className: string, isHiding: boolean) {
  return cn(className, isHiding && styles.swap);
}

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

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SlideMedia({ config, isHiding }: { config: WorkImageConfig; isHiding: boolean }) {
  const src = workImageSrc(config);

  return (
    <picture>
      <source srcSet={src.webp} type="image/webp" />
      <source srcSet={src.fallback} type={src.mime} />
      <img
        alt={config.alt}
        src={src.fallback}
        decoding="async"
        draggable={false}
        className={isHiding ? styles.swap : undefined}
      />
    </picture>
  );
}

function NavButton({
  direction,
  variant,
  onClick,
}: {
  direction: 'prev' | 'next';
  variant: 'edge' | 'tap';
  onClick: () => void;
}) {
  const label = direction === 'prev' ? 'Previous image' : 'Next image';

  if (variant === 'tap') {
    return (
      <button type="button" className={styles.tapBtn} aria-label={label} onClick={onClick}>
        <Chevron direction={direction} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(styles.nav, direction === 'prev' ? styles.prev : styles.next)}
      aria-label={label}
      onClick={onClick}
    >
      <span className={styles.aura} />
      <span className={styles.chev}>
        <Chevron direction={direction} />
      </span>
    </button>
  );
}

function Pager({
  imgConfigs,
  gallery,
}: {
  imgConfigs: WorkImageConfig[];
  gallery: Gallery;
}) {
  const { index, count, isHiding, go, jump } = gallery;

  return (
    <div className={styles.pager}>
      <div className={styles.tapnav}>
        <NavButton direction="prev" variant="tap" onClick={() => go(-1)} />
        <NavButton direction="next" variant="tap" onClick={() => go(1)} />
      </div>
      <div className={styles.dots} role="tablist" aria-label="Choose image">
        {imgConfigs.map((config, i) => (
          <button
            key={config.srcName}
            type="button"
            role="tab"
            className={cn(styles.dot, i === index && styles.isActive)}
            aria-label={`Image ${i + 1}`}
            aria-selected={i === index}
            onClick={() => jump(i)}
          />
        ))}
      </div>
      <div className={cnFade(styles.count, isHiding)}>
        <b>{pad(index + 1)}</b>
        {` / ${pad(count)}`}
      </div>
    </div>
  );
}

interface Props {
  imgConfigs: WorkImageConfig[];
  gallery: Gallery;
  frameOverflows: boolean;
  frameRef: RefObject<HTMLElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onPointerDown: (event: PointerEvent) => void;
  onPointerUp: (event: PointerEvent) => void;
}

/** Gallery dialog: framed screenshot, navigation, dots, and caption. */
function LightboxView({
  imgConfigs,
  gallery,
  frameOverflows,
  frameRef,
  closeButtonRef,
  onClose,
  onPointerDown,
  onPointerUp,
}: Props) {
  const headingId = useId();
  const captionId = useId();
  const { slide, isHiding, go } = gallery;

  if (!slide) return null;

  return (
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
        <CloseIcon />
      </button>

      <NavButton direction="prev" variant="edge" onClick={() => go(-1)} />
      <NavButton direction="next" variant="edge" onClick={() => go(1)} />

      <div className={styles.stage}>
        <header>
          <h2 id={headingId} className={cnFade(styles.lbTitle, isHiding)}>
            {slide.companyName}
          </h2>
          <p className={cnFade(styles.lbRole, isHiding)}>
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
          <p id={captionId} className={cnFade(styles.caption, isHiding)}>
            {slide.alt}
          </p>
          <Pager imgConfigs={imgConfigs} gallery={gallery} />
        </div>
      </div>
    </div>
  );
}

export default LightboxView;
