import { getColor } from '@theme-ui/color';
import type { KeyboardEvent } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';
import type { ImageConfig } from 'components/sections/work/shared/constants';

/** Overlapping trio: slot 0 back-left, 1 center (in-flow), 2 back-right. */
const TRIO_SLOT_LAYOUT: ThemeUIStyleObject[] = [
  {
    position: 'absolute',
    zIndex: '2',
    top: '-20%',
    bottom: '0',
    left: '0',
    right: ['auto', 'auto', 'initial'],
  },
  {
    zIndex: '1',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    m: 'auto',
  },
  {
    position: 'absolute',
    zIndex: '0',
    bottom: '0',
    right: '0',
    top: '20%',
  },
];

/**
 * First up to three images use the stacked layout; any further `imgConfigs` entries appear only in the carousel.
 */
function getTrioDisplayPlan(imgCount: number): Array<{ imgIndex: number; slotIndex: number }> {
  if (imgCount >= 3) {
    return [
      { imgIndex: 0, slotIndex: 0 },
      { imgIndex: 1, slotIndex: 1 },
      { imgIndex: 2, slotIndex: 2 },
    ];
  }
  if (imgCount === 2) {
    return [
      { imgIndex: 0, slotIndex: 0 },
      { imgIndex: 1, slotIndex: 1 },
    ];
  }
  if (imgCount === 1) {
    return [{ imgIndex: 0, slotIndex: 1 }];
  }
  return [];
}

const tileSx: ThemeUIStyleObject = {
  position: 'relative',
  display: 'block',
  height: '0',
  overflow: 'hidden',

  cursor: 'pointer',
  
  borderRadius: '4rem',
  opacity: '0.95',
  transform: 'perspective(420px)',
  transition: '0.12s ease',
  width: ['75%', '50%', '43%'],
  maxWidth: '650rem',
  '--aspect-ratio': ['2/1', '7/2', '7/2'],
  paddingBottom: 'calc(100%/(var(--aspect-ratio)))',
  border: (t) => getColor(t, 'workImgBorder'),

  '&:hover': {
    transition: '0.35s ease-in-out',
    opacity: '1',
    zIndex: '3',
    transform: 'perspective(420px) translateZ(24px)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 3px 5px 15px 0px',
  },
  '&:focus-visible': {
    outline: (t) => `3rem solid ${getColor(t, 'link')}`,
    outlineOffset: '4rem',
  },

  // Fill box when child is `<picture>` (or other wrapper) before the `<img>`
  '> *': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
  },
  img: {
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'top',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'rgba(120, 120, 120, 0.8) 1rem 1rem 13rem 0rem',
  },
};

function openCarouselKeyboard(e: KeyboardEvent, openAt: () => void) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openAt();
  }
}

interface Props {
  imgConfigs: ImageConfig[];
  onOpenCarousel: (index: number) => void;
};

function ImgTrio({
  imgConfigs,
  onOpenCarousel,
}: Props) {
  if (!imgConfigs.length) {
    return null;
  }

  const trioPlan = getTrioDisplayPlan(imgConfigs.length);

  return (
    <div sx={{
      position: 'relative',
      textAlign: 'center',
      width: ['100%', '100%', 'auto'],
      my: 5,
    }}
    >
      {trioPlan.map(({ imgIndex, slotIndex }) => {
        const config = imgConfigs[imgIndex];
        const type = config.type || 'png';

        return (
          <div
            key={config.srcName}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`Open image gallery: ${config.alt ?? 'work sample'}`}
            onClick={() => onOpenCarousel(imgIndex)}
            onKeyDown={(e) => openCarouselKeyboard(e, () => onOpenCarousel(imgIndex))}
            sx={{
              ...tileSx,
              ...TRIO_SLOT_LAYOUT[slotIndex],
            }}
          >
            <picture>
              <source
                srcSet={`/images/work/${config.srcName}.webp`}
                type="image/webp"
              />
              <source
                srcSet={`/images/work/${config.srcName}.${type}`}
                type={`image/${type}`}
              />
              <img
                alt={config.alt}
                src={`/images/work/${config.srcName}.${type}`}
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        );
      })}
    </div>
  );
}

export { ImgTrio };
export default ImgTrio;
