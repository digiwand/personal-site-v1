import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ariaLabelledBy: string;
  ariaDescribedBy: string;
  children: React.ReactNode;
}

/**
 * Portal overlay + backdrop dismissal. When the modal is open, it prevents scrolling of the body content.
 */
function Modal({
  isOpen,
  onClose,
  ariaLabelledBy,
  ariaDescribedBy,
  children,
}: Props) {
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
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-16 sm:p-32 land:p-64
        bg-[rgba(55,55,55,0.72)] [backdrop-filter:blur(6px)]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={(e) => e.stopPropagation()}
        className="w-full"
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default Modal;
