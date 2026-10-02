import { useEffect, type RefObject } from 'react';

/** Freezes the page behind the dialog, marks it inert, and restores focus on close. */
export function useScrollLock(
  isOpen: boolean,
  closeButtonRef: RefObject<HTMLButtonElement | null>,
) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const pageRoot = document.getElementById('__next');
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('work-lightbox-open');
    pageRoot?.setAttribute('inert', '');

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('work-lightbox-open');
      pageRoot?.removeAttribute('inert');
      previousFocus?.focus();
    };
  }, [isOpen, closeButtonRef]);
}
