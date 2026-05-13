import { getColor } from '@theme-ui/color';
import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useId, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Box, Button } from 'theme-ui';

import { generateWorkImage } from './workImage';

const propTypes = {
  companyName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcName: PropTypes.string.isRequired,
    type: PropTypes.string,
  })).isRequired,
  initialSlideIndex: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function JobSectionImageCarouselModal({
  companyName,
  title,
  subtitle,
  imgConfigs,
  initialSlideIndex,
  isOpen,
  onClose,
}) {
  const headingId = useId();
  const captionId = useId();
  const count = imgConfigs.length;
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

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

  if (!isOpen || typeof document === 'undefined' || count === 0) {
    return null;
  }

  const caption = imgConfigs[activeIndex]?.alt ?? '';

  const modal = (
    <Box
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      aria-describedby={captionId}
      onClick={onClose}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: [3, 4, 5],
        bg: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100rem',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          bg: (t) => getColor(t, 'glassThickBg'),
          borderRadius: '12rem',
          boxShadow: '0 8rem 48rem rgba(0,0,0,0.35)',
          overflow: 'hidden',
          border: (t) => `1rem solid ${getColor(t, 'workImgBorder')}`,
        }}
      >
        <Button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image gallery"
          sx={{
            position: 'absolute',
            top: [2, 3],
            right: [2, 3],
            zIndex: 2,
            width: '44rem',
            height: '44rem',
            p: 0,
            minHeight: 0,
            lineHeight: 1,
            fontSize: '24rem',
            borderRadius: '50%',
            bg: 'rgba(0,0,0,0.45)',
            color: 'background',
            cursor: 'pointer',
            '&:hover': { bg: 'rgba(0,0,0,0.6)' },
          }}
        >
          ×
        </Button>

        <Box sx={{ pt: [5, 5, 4], px: [4, 5, 6], pb: 2, textAlign: 'center' }}>
          <Box
            id={headingId}
            as="h3"
            sx={{
              fontFamily: 'heading2',
              color: (t) => getColor(t, 'workHeader'),
              fontSize: ['18rem', '20rem', '22rem'],
              m: 0,
            }}
          >
            {companyName}
          </Box>
          <Box
            as="p"
            sx={{
              m: 0,
              mt: 2,
              color: (t) => getColor(t, 'workSubHeader'),
              variant: 'text.body',
              fontSize: ['14rem', '15rem', '16rem'],
            }}
          >
            {title}
            {' '}
            <Box as="small" sx={{ color: (t) => getColor(t, 'workHeader') }}>
              {subtitle}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'relative',
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: ['200rem', '280rem', '320rem'],
            px: ['48rem', '56rem', '64rem'],
            py: 3,
            bg: (t) => getColor(t, 'background'),

            '& picture': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '100%',
            },
            '& img': {
              maxWidth: '100%',
              maxHeight: ['52vh', '58vh', '62vh'],
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              boxShadow: 'none',
            },
          }}
        >
          <Button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            sx={{
              position: 'absolute',
              left: [1, 2, 3],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44rem',
              height: '44rem',
              p: 0,
              minHeight: 0,
              borderRadius: '50%',
              fontSize: '22rem',
              lineHeight: 1,
              bg: (t) => getColor(t, 'carouselItemBg'),
              color: (t) => getColor(t, 'text'),
              cursor: 'pointer',
              border: (t) => `1rem solid ${getColor(t, 'workImgBorder')}`,
              '&:hover': { opacity: 0.9 },
            }}
          >
            ‹
          </Button>

          {generateWorkImage(imgConfigs[activeIndex], { loading: 'eager' })}

          <Button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            sx={{
              position: 'absolute',
              right: [1, 2, 3],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44rem',
              height: '44rem',
              p: 0,
              minHeight: 0,
              borderRadius: '50%',
              fontSize: '22rem',
              lineHeight: 1,
              bg: (t) => getColor(t, 'carouselItemBg'),
              color: (t) => getColor(t, 'text'),
              cursor: 'pointer',
              border: (t) => `1rem solid ${getColor(t, 'workImgBorder')}`,
              '&:hover': { opacity: 0.9 },
            }}
          >
            ›
          </Button>
        </Box>

        <Box
          id={captionId}
          sx={{
            px: [4, 5, 6],
            py: [3, 4],
            textAlign: 'center',
            variant: 'text.body',
            color: (t) => getColor(t, 'workSubHeader'),
            fontSize: ['14rem', '15rem', '16rem'],
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
      </Box>
    </Box>
  );

  return createPortal(modal, document.body);
}

JobSectionImageCarouselModal.propTypes = propTypes;

export default JobSectionImageCarouselModal;
