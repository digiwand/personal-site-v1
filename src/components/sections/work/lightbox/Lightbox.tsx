import { useEffect, useRef, type PointerEvent } from 'react';
import { createPortal } from 'react-dom';

import { WorkImageConfig } from 'components/sections/work/shared/constants';

import LightboxView from './LightboxView';
import { useFrameOverflow } from './useFrameOverflow';
import { useGallery } from './useGallery';
import { useScrollLock } from './useScrollLock';

const SWIPE_PX = 45;

/** Arrow keys change slides. Escape closes the gallery. */
function useGalleryKeys(
  isOpen: boolean,
  onClose: () => void,
  go: (delta: number) => void,
) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, go]);
}

/** Changes slides when a horizontal swipe starts outside a button or link. */
function useSwipe(go: (delta: number) => void) {
  const gestureRef = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (event: PointerEvent) => {
    if ((event.target as HTMLElement).closest('button, a')) {
      gestureRef.current = null;
      return;
    }
    gestureRef.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: PointerEvent) => {
    const start = gestureRef.current;
    gestureRef.current = null;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    const isSwipe = Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy);

    if (isSwipe) {
      go(dx < 0 ? 1 : -1);
    }
  };

  return { onPointerDown, onPointerUp };
}

interface Props {
  imgConfigs: WorkImageConfig[];
  /**
   * Slide shown when the dialog opens. The work section remounts this
   * component with `key` on each open, so a later change is ignored until then.
   */
  initialSlideIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

/** Portals the work gallery and connects slide changes to keyboard and swipe. */
function Lightbox({
  imgConfigs,
  initialSlideIndex,
  isOpen,
  onClose,
}: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLElement>(null);
  
  useScrollLock(isOpen, closeButtonRef);

  const gallery = useGallery(imgConfigs, initialSlideIndex, isOpen);
  const frameOverflows = useFrameOverflow(frameRef, gallery.index, isOpen);
  useGalleryKeys(isOpen, onClose, gallery.go);
  const { onPointerDown, onPointerUp } = useSwipe(gallery.go);

  if (!isOpen || !gallery.slide || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <LightboxView
      imgConfigs={imgConfigs}
      gallery={gallery}
      frameOverflows={frameOverflows}
      frameRef={frameRef}
      closeButtonRef={closeButtonRef}
      onClose={onClose}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    />,
    document.body,
  );
}

export default Lightbox;
