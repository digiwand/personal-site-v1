import { getColor } from '@theme-ui/color';
import PropTypes from 'prop-types';

import AspectRatio from 'components/common/AspectRatio';
import { generateWorkImage } from 'components/sections/work/shared/generateWorkImage';

/** Overlapping trio: slot 0 back-left, 1 center, 2 back-right. */
const TRIO_SLOT_LAYOUT = [
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
 * @returns {{ imgIndex: number, slotIndex: number }[]}
 */
function getTrioDisplayPlan(imgCount) {
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

const aspectRatioStyles = {
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
};

const propTypes = {
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    srcName: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
  onOpenCarousel: PropTypes.func.isRequired,
};

function openCarouselKeyboard(e, openAt) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openAt();
  }
}

const interactiveSx = {
  cursor: 'pointer',
  '&:focus-visible': {
    outline: (t) => `3rem solid ${getColor(t, 'link')}`,
    outlineOffset: '4rem',
  },
};

function JobSectionImgTrio({
  imgConfigs,
  onOpenCarousel,
}) {
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
      {trioPlan.map(({ imgIndex, slotIndex }) => (
        <AspectRatio
          key={imgConfigs[imgIndex].srcName}
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-label={`Open image gallery: ${imgConfigs[imgIndex]?.alt ?? 'work sample'}`}
          onClick={() => onOpenCarousel(imgIndex)}
          onKeyDown={(e) => openCarouselKeyboard(e, () => onOpenCarousel(imgIndex))}
          sx={{
            ...TRIO_SLOT_LAYOUT[slotIndex],
            ...interactiveSx,
            ...aspectRatioStyles,
          }}
        >
          {generateWorkImage(imgConfigs[imgIndex], { loading: 'lazy' })}
        </AspectRatio>
      ))}

    </div>
  );
}

JobSectionImgTrio.propTypes = propTypes;

export default JobSectionImgTrio;
