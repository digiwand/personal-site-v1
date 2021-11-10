import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode,
  onOutsideClick(): void,
};

/**
 * Used to detect clicks outside the "children" element(s) in its DOM tree. This will not work for
 * children rendered in a React Portal because they will lie outside of the DOM heirachy.
 *
 * @example
    <OutsideClickHandler onOutsideClick={handleOutsideDrawerClick}>
      <Modal />
    </OutsideClickHandler>
 */
function OutsideClickHandler({ children, onOutsideClick }: Props) {
  const wrapperRef = useRef<HTMLDivElement>();

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current
      && !wrapperRef.current.contains(event.target)
    ) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div ref={wrapperRef}>{children}</div>
  );
}

export default OutsideClickHandler;
