import { getColor } from '@theme-ui/color';
import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useId, useRef, useState,
} from 'react';
import { Box, Image } from 'theme-ui';

import Modal from 'components/modal/Modal';
import ButtonRound from 'components/button/ButtonRound'; 

const imageCarouselPropTypes = {
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcName: PropTypes.string.isRequired,
    type: PropTypes.string,
    companyName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  })).isRequired,
  activeIndex: PropTypes.number.isRequired,
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  captionId: PropTypes.string.isRequired,
};

/**
 * Carousel stage (prev / image / next) and caption + slide counter.
 */
function ImageCarouselModal({
  imgConfigs,
  activeIndex,
  goPrev,
  goNext,
  captionId,
}) {
  const count = imgConfigs.length;
  if (count === 0) return null;

  const imgConfig = imgConfigs[activeIndex];
  const imgType = imgConfig.type || 'png';
  const caption = imgConfig.alt ?? '';

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
        <ButtonRound
          onClick={goPrev}
          aria-label="Previous image"
          sx={{
            position: 'absolute',
            left: [1, 2, 3],
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          ‹
        </ButtonRound>

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
          <picture sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100%',
            margin: '0 auto',
          }}>
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

        <ButtonRound
          onClick={goNext}
          aria-label="Next image"
          sx={{
            position: 'absolute',
            right: [1, 2, 3],
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          ›
        </ButtonRound>
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
          {activeIndex + 1}
          {' '}
          /
          {' '}
          {count}
        </Box>
      </Box>
    </>
  );
}

ImageCarouselModal.propTypes = imageCarouselPropTypes;

const workImageCarouselModalPropTypes = {
  slideConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcName: PropTypes.string.isRequired,
    type: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  })).isRequired,
  initialSlideIndex: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

/**
 * Work-wide image gallery: header follows the active slide’s job; carousel uses {@link ImageCarouselModal} inside {@link Modal}.
 */
function WorkImageCarouselModal({
  slideConfigs,
  initialSlideIndex,
  isOpen,
  onClose,
}) {
  const headingId = useId();
  const captionId = useId();
  const count = slideConfigs.length;
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
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

  const slide = slideConfigs[activeIndex];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy={headingId}
      ariaDescribedBy={captionId}
    >
        <ButtonRound
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close image gallery"
          sx={{
            position: 'absolute',
            top: [2, 3],
            right: [2, 3],
          }}
        >
          ×
        </ButtonRound>

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
            <Box as="small">
              {slide.subtitle}
            </Box>
          </Box>
        </Box>

        <ImageCarouselModal
          imgConfigs={slideConfigs}
          activeIndex={activeIndex}
          goPrev={goPrev}
          goNext={goNext}
          captionId={captionId}
        />
    </Modal>
  );
}

WorkImageCarouselModal.propTypes = workImageCarouselModalPropTypes;

export default WorkImageCarouselModal;