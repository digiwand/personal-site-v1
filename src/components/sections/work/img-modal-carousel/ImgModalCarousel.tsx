import { getColor } from '@theme-ui/color';
import {
  useCallback, useEffect, useId, useRef, useState,
} from 'react';
import { Box, Image } from 'theme-ui';

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

/**
 * Carousel stage (prev / image / next) and caption + slide counter.
 */
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
      <Box
        sx={{
          position: 'relative',
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: ['200rem', '280rem', '320rem'],
          width: '100%',
          px: ['48rem', '56rem', '128rem'],
          py: 3,

          '& img': {
            flex: '1 0 auto',
            width: '100%',
            maxWidth: ['100%', '100%', '820rem'],
            height: 'auto',
            objectFit: 'contain',
            boxShadow: 'none',
          },
        }}
      >
        <ButtonBase
          onClick={goPrev}
          aria-label="Previous image"
          sx={{
            position: 'absolute',
            left: [1, 2, 3],
            top: '50%',
            transform: 'translateY(-50%)',

            fontFamily: 'barlow',
            fontSize: '28rem',
            fontWeight: '300',
            padding: '0 1rem 5rem 0',
          }}
        >
          ‹
        </ButtonBase>

        <div
          sx={{
            overflowY: 'auto',
            width: '100%',
            maxHeight: ['52vh', '58vh', '62vh'],

            '&::-webkit-scrollbar': {
              width: '7px',
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              // todo: hide for now
              // backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '7px',
            },
          }}
        >
          <picture
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '100%',
              margin: '0 auto',
            }}
          >
            <source
              srcSet={`/images/work/${imgConfig.srcName}.webp`}
              type="image/webp"
            />
            <source
              srcSet={`/images/work/${imgConfig.srcName}.${imgType}`}
              type={`image/${imgType}`}
            />
            <Image
              alt={caption}
              src={`/images/work/${imgConfig.srcName}.${imgType}`}
              decoding="async"
              loading="lazy"
              sx={{ width: '100%' }}
            />
          </picture>
        </div>

        <ButtonBase
          onClick={goNext}
          aria-label="Next image"
          sx={{
            position: 'absolute',
            right: [1, 2, 3],
            top: '50%',
            transform: 'translateY(-50%)',

            fontFamily: 'barlow',
            fontSize: '28rem',
            fontWeight: '300',
            padding: '0 0 5rem 0',
          }}
        >
          ›
        </ButtonBase>
      </Box>

      <Box
        id={captionId}
        sx={{
          px: [4, 5, 6],
          py: [3, 4],
          textAlign: 'center',
          borderTop: (t) => `1rem solid ${getColor(t, 'workImgBorder')}`,
        }}
      >
        {caption}
        <Box as="span" sx={{ display: 'block', mt: 2, opacity: 0.75, fontSize: '13rem' }}>
          {slideLabel}
          {' '}
          /
          {' '}
          {countLabel}
        </Box>
      </Box>
    </>
  );
}

interface Props {
  imgConfigs: WorkImageConfig[];
  initialSlideIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Work-wide image gallery: header follows the active slide’s job; carousel uses {@link ImageCarouselModalContent} inside {@link Modal}.
 */
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
        sx={{
          position: 'absolute',
          top: [2, 3],
          right: [2, 3],
          '&:hover': {
            transform: 'rotate(90deg)',
          },
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </ButtonBase>

      <Box sx={{ pt: [5, 5, 4], px: [4, 5, 6], pb: 2, textAlign: 'center' }}>
        <Box
          id={headingId}
          as="h3"
          sx={{
            fontFamily: 'heading2',
            color: (t) => getColor(t, 'workHeader'),
            fontSize: ['18rem', '20rem', '22rem'],
            mb: 2,
          }}
        >
          {slide.companyName}
        </Box>
        <Box as="p">
          {slide.title}
          {' '}
          •
          {' '}
          {slide.subtitle}
        </Box>
      </Box>

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
