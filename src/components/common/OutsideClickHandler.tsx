import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  onOutsideClick(): void;
}

/**
 * Detects clicks outside the children in this DOM tree. This does not see
 * elements rendered in a portal, because those nodes are outside this subtree.
 *
 * @example
 * <OutsideClickHandler onOutsideClick={handleOutsideDrawerClick}>
 *   <Lightbox />
 * </OutsideClickHandler>
 */
function OutsideClickHandler({ children, onOutsideClick }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onOutsideClickRef = useRef(onOutsideClick);

  useEffect(() => {
    onOutsideClickRef.current = onOutsideClick;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      if (!(target instanceof Node)) return;

      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        onOutsideClickRef.current();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideClickHandler;
