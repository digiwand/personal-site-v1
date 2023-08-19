import { getColor } from '@theme-ui/color'
import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <footer
      sx={{
        backgroundColor: (t) => getColor(t, 'footerBg'),
        backdropFilter: 'blur(4px) saturate(130%)',
        boxShadow: '0 8rem 32rem 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: ['column-reverse', 'row', 'row'],
        justifyContent: 'space-between',
        py: 2,
        minHeight: '40rem',
        px: [4, 4, 6],
        whiteSpace: 'nowrap',
        textAlign: 'center',
        fontSize: '14rem',
        fontFamily: 'body',
        fontWeight: '300',
        letterSpacing: '1rem',
      }}
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
            display: ['flex', 'block', 'inline-block'],
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: ['column', 'row', 'row'],
            pt: [3, 2, 0],
          }}
        >
          Made by Ariella Vu

          <span sx={{ display: ['none', 'inline', 'inline'] }}>
            &nbsp; - &nbsp;
          </span>

          <a
            href="https://github.com/digiwand/personal-site-v1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              variant: 'text.link',
              pt: [3, 0, 0],
            }}
          >
            Open Source on Github
          </a>
        </span>
      </Fade>
    </footer>
  );
}

export default Footer;
