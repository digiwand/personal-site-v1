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
        height: '50rem',
        width: '50rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'opacity .3s',
        mt: 4,
        mr: 4,
        opacity: [1, 1, 0],
        pointerEvents: ['initial', 'initial', 'none'],
      }}
      onClick={onClick}
      aria-label="Open menu drawer"
    >
      <div sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
      <div sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
      <div sx={(theme) => ({
        background: `${theme.colors.text}`,
        ...menuLine,
      })}
      />
    </Button>
  );
}

export default NavMenuButton;
