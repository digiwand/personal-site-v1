import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <footer
      sx={(theme) => ({
        backgroundColor: `${theme.colors.backgroundFooter}`,
        color: `${theme.colors.backgroundFooterText}`,
        display: 'flex',
        flexDirection: ['column-reverse', 'row', 'row'],
        justifyContent: 'space-between',
        py: 2,
        minHeight: '40px',
        px: [4, 6, 6],
        fontSize: '12rem',
        whiteSpace: 'nowrap',
        textAlign: 'center',
      })}
    >
      <Fade bottom>
        <span
          sx={{
            display: ['block', 'block', 'inline-block'],
            py: [3, 2, 0],
          }}
        >
          © 2021 Ariella Vu
        </span>
      </Fade>
      <Fade bottom>
        <span
          sx={{
            display: ['block', 'block', 'inline-block'],
            pt: [3, 2, 0],
          }}
        >
          Designed & Built by Ariella Vu &nbsp; -- &nbsp;
          <a href="https://github.com/ariellanvu/personal-site-v1" target="_blank" rel="noopener noreferrer">
            Open Source on Github
          </a>
        </span>
      </Fade>
    </footer>
  );
}

export default Footer;
