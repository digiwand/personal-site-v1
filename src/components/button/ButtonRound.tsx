import { getColor } from '@theme-ui/color';
import { Button } from 'theme-ui';

interface ButtonProps extends React.ComponentProps<typeof Button> {
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

const ButtonRound = ({ children, onClick, ...buttonProps }: ButtonProps) => {
  const { sx: userSx, ...restProps } = buttonProps as any;

  return (
    <Button
      {...(restProps as any)}
      onClick={onClick}
      sx={{ ...defaultSx, ...(userSx || {}) } as any}
    >
      {children}
    </Button>
  );
};

export default ButtonRound;