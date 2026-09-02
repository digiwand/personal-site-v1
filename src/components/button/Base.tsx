import React, { forwardRef } from 'react';
import { cn } from 'lib/cn';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...restProps }, ref) => (
    <button
      ref={ref}
      type="button"
      {...restProps}
      onClick={onClick}
      className={cn('btn-base', className)}
    >
      {children}
    </button>
  ),
);

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
