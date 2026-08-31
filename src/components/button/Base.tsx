import React, { forwardRef } from 'react';
import { Button } from 'theme-ui';

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  onClick: () => void;
  children: React.ReactNode;
}

const defaultSx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '44rem',
  height: '44rem',

  border: '1px solid var(--panel-brd)',
  background: 'rgba(20, 14, 34, .35)',
  backdropFilter: 'blur(6px)',
  borderRadius: '11px',

  transition: 'transform .16s, background .2s',

  '&:focus-visible': {
    outline: '2px solid var(--gold)',
    outlineOffset: '2px',
    borderRadius: '6px',
  },
  '&:hover': {
    background: 'linear-gradient(70deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.30))',
    border: '1rem solid rgba(255, 255, 255, 0.18)',
    color: 'rgb(239, 240, 241)',
  },
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, sx: userSx, ...restProps }, ref) => (
    <button
      ref={ref}
      {...restProps}
      onClick={onClick}
      sx={{ ...defaultSx, ...(userSx || {}) }}
    >
      {children}
    </button>
  ),
);

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
