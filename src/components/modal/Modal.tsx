import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

const modalPropTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ariaLabelledBy: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Portal overlay + backdrop dismissal. When the modal is open, it prevents scrolling of the body content.
 */
function Modal({
  isOpen,
  onClose,
  ariaLabelledBy,
  ariaDescribedBy,
  children,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  const modal = (
    <Box
      role="presentation"
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
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>
  );

  return createPortal(modal, document.body);
}

Modal.propTypes = modalPropTypes;
export default Modal;