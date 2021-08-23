import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <footer
      sx={(theme) => ({
        backgroundColor: `${theme.colors.frame}`,
        color: `${theme.colors.frameText}`,
        display: 'flex',
        justifyContent: 'flex-end',
        py: 2,
        minHeight: '40px',
        px: [4, 6, 6],
      })}
    >
      <Fade right>
        <span
          sx={{
            flexBasis: '100%',
            fontSize: '12rem',
            whiteSpace: 'nowrap',
            pt: [3, 2, 0],
            textAlign: ['center', 'center', 'right'],
          }}
        >
          © 2021 Ariella Vu. All Rights Reserved.
        </span>
      </Fade>
    </footer>
  );
}

export default Footer;
