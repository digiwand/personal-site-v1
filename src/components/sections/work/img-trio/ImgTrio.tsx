import type { KeyboardEvent } from 'react';
import type { ImageConfig } from 'components/sections/work/shared/constants';
import { cn } from 'lib/cn';

const TRIO_SLOT_CLASS = [
  'absolute z-2 -top-[20%] bottom-0 left-0 right-auto land:right-[initial]',
  'z-1 top-0 bottom-0 left-0 right-0 m-auto',
  'absolute z-0 bottom-0 right-0 top-[20%]',
];

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

function openCarouselKeyboard(e: KeyboardEvent, openAt: () => void) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openAt();
  }
}

interface Props {
  imgConfigs: ImageConfig[];
  onOpenCarousel: (index: number) => void;
}

function ImgTrio({
  imgConfigs,
  onOpenCarousel,
}: Props) {
  if (!imgConfigs.length) {
    return null;
  }

  const trioPlan = getTrioDisplayPlan(imgConfigs.length);

  return (
    <div className="relative text-center w-full land:w-auto my-64">
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
            className={cn('work-img-tile', TRIO_SLOT_CLASS[slotIndex])}
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
