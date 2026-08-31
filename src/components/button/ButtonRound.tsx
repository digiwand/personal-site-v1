import React, { forwardRef } from 'react';
import { Button } from 'theme-ui';

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  onClick: () => void;
  children: React.ReactNode;
}

const defaultSx = {
  borderRadius: '50%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '44rem',
  height: '44rem',
  p: '0 0 4rem 3rem',
  fontSize: '32rem',
};

const ButtonRound = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, sx: userSx, ...restProps }, ref) => (
    <Button
      ref={ref}
      {...restProps}
      onClick={onClick}
      sx={{ ...defaultSx, ...(userSx || {}) }}
    >
      {children}
    </Button>
  ),
);

ButtonRound.displayName = 'ButtonRound';

export default ButtonRound;
