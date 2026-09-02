import {
  useCallback, useEffect, useId, useRef, useState,
} from 'react';

import Modal from 'components/modal/Modal';
import ButtonBase from 'components/button/Base';
import { WorkImageConfig } from 'components/sections/work/shared/constants';

interface ImageCarouselModalContentProps {
  imgConfigs: WorkImageConfig[];
  activeIndex: number;
  goPrev: () => void;
  goNext: () => void;
  captionId: string;
}

function ImageCarouselModalContent({
  imgConfigs,
  activeIndex,
  goPrev,
  goNext,
  captionId,
}: ImageCarouselModalContentProps) {
  const count = imgConfigs.length;
  if (count === 0) return null;

  const imgConfig = imgConfigs[activeIndex];
  const imgType = imgConfig.type || 'png';
  const caption = imgConfig.alt ?? '';
  const slideLabel = String(activeIndex + 1).padStart(2, '0');
  const countLabel = String(count).padStart(2, '0');

  return (
    <>
      <div
        className="relative flex-[1_1_auto] flex items-center justify-center
          min-h-[200rem] sm:min-h-[280rem] land:min-h-[320rem] w-full
          px-[48rem] sm:px-[56rem] land:px-[128rem] py-16
          [&_img]:flex-[1_0_auto] [&_img]:w-full [&_img]:max-w-full land:[&_img]:max-w-[820rem]
          [&_img]:h-auto [&_img]:object-contain [&_img]:shadow-none"
      >
        <ButtonBase
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 land:left-16 top-1/2 -translate-y-1/2
            font-barlow text-[28rem] font-light pt-0 pr-[1rem] pb-[5rem] pl-0"
        >
          ‹
        </ButtonBase>

        <div
          className="overflow-y-auto w-full max-h-[52vh] sm:max-h-[58vh] land:max-h-[62vh]
            [&::-webkit-scrollbar]:w-[7px] [&::-webkit-scrollbar]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-[7px]"
        >
          <picture className="flex items-center justify-center max-w-full mx-auto">
            <source
              srcSet={`/images/work/${imgConfig.srcName}.webp`}
              type="image/webp"
            />
            <source
              srcSet={`/images/work/${imgConfig.srcName}.${imgType}`}
              type={`image/${imgType}`}
            />
            <img
              alt={caption}
              src={`/images/work/${imgConfig.srcName}.${imgType}`}
              decoding="async"
              loading="lazy"
              className="w-full"
            />
          </picture>
        </div>

        <ButtonBase
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 sm:right-8 land:right-16 top-1/2 -translate-y-1/2
            font-barlow text-[28rem] font-light pt-0 pr-0 pb-[5rem] pl-0"
        >
          ›
        </ButtonBase>
      </div>

      <div
        id={captionId}
        className="px-32 sm:px-64 land:px-128 py-16 sm:py-32 text-center
          [border-top:var(--theme-work-img-border)]"
      >
        {caption}
        <span className="block mt-8 opacity-75 text-[13rem]">
          {slideLabel}
          {' '}
          /
          {' '}
          {countLabel}
        </span>
      </div>
    </>
  );
}

interface Props {
  imgConfigs: WorkImageConfig[];
  initialSlideIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

function ImageCarouselModal({
  imgConfigs,
  initialSlideIndex,
  isOpen,
  onClose,
}: Props) {
  const headingId = useId();
  const captionId = useId();
  const count = imgConfigs.length;
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const goNext = useCallback(() => {
    if (count === 0) return;
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    if (count === 0) return;
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || count === 0) {
    return null;
  }

  const slide = imgConfigs[activeIndex];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy={headingId}
      ariaDescribedBy={captionId}
    >
      <ButtonBase
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close image gallery"
        className="absolute top-8 sm:top-16 right-8 sm:right-16 hover:rotate-90"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </ButtonBase>

      <div className="pt-64 land:pt-32 px-32 sm:px-64 land:px-128 pb-8 text-center">
        <h3
          id={headingId}
          className="font-heading2 text-[var(--theme-work-header)] text-[18rem] sm:text-[20rem]
            land:text-[22rem] mb-8"
        >
          {slide.companyName}
        </h3>
        <p>
          {slide.title}
          {' '}
          •
          {' '}
          {slide.subtitle}
        </p>
      </div>

      <ImageCarouselModalContent
        imgConfigs={imgConfigs}
        activeIndex={activeIndex}
        goPrev={goPrev}
        goNext={goNext}
        captionId={captionId}
      />
    </Modal>
  );
}

export default ImageCarouselModal;
