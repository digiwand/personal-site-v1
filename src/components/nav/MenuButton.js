import { Button } from 'theme-ui';

const menuLine = {
  margin: '2.5rem 0',
  width: '24rem',
  height: '2rem',
  transition: 'background 0.2s',
  borderRadius: '2rem',
  background: (t) => t.colors.glassThickBg,
};

function NavMenuButton({ onClick }) {
  return (
    <Button
      sx={{
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        height: '54rem',
        width: '60rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'opacity .3s',
        pl: 3,
        mt: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        opacity: [1, 1, 0],
        pointerEvents: ['initial', 'initial', 'none'],
      }}
      onClick={onClick}
    >
      <span sx={{
        ...menuLine,
      }}
      />
      <span sx={{
        ...menuLine,
      }}
      />
      <span sx={{
        ...menuLine,
      }}
      />
    </Button>
  );
}

export default NavMenuButton;
