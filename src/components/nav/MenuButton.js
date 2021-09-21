import { Button } from 'theme-ui';

const menuLine = {
  margin: '2rem 0',
  width: '15rem',
  height: '1rem',
  transition: 'background 0.2s',
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
        width: '65rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'opacity .3s',
        pl: 1,
        mt: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        opacity: [1, 1, 0],
        pointerEvents: ['initial', 'initial', 'none'],
      }}
      onClick={onClick}
      aria-label="Open menu drawer"
    >
      <span sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
      <span sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
      <span sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
    </Button>
  );
}

export default NavMenuButton;
