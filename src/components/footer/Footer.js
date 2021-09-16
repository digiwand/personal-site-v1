import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <footer
      sx={(theme) => ({
        backgroundColor: theme.colors.footerBg,
        backdropFilter: 'blur(4px) saturate(130%)',
        boxShadow: '0 8rem 32rem 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: ['column-reverse', 'row', 'row'],
        justifyContent: 'space-between',
        py: 2,
        minHeight: '40px',
        px: [4, 6, 6],
        whiteSpace: 'nowrap',
        textAlign: 'center',
        fontSize: '14rem',
        fontFamily: 'body',
        fontWeight: '300',
        letterSpacing: '1rem',
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
          Made by Ariella Vu &nbsp; -- &nbsp;
          <a href="https://github.com/ariellanvu/personal-site-v1" target="_blank" rel="noopener noreferrer">
            Open Source on Github
          </a>
        </span>
      </Fade>
    </footer>
  );
}

export default Footer;
