import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import FooterSocialIcons from 'components/footer/SocialIcons';

function Footer() {
  return (
    <footer
      sx={(theme) => ({
        backgroundColor: `${theme.colors.frame}`,
        color: `${theme.colors.frameText}`,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '260px',
        px: [4, 6, 6],
        py: 4,
      })}
    >
      <div
        sx={{
          display: 'flex',
          flex: '1 0 auto',
          justifyContent: 'center',
          flexDirection: ['column', 'row', 'row'],
        }}
      >
        <div
          sx={{
            flex: '1 0 25%',
          }}
        >
          <Fade bottom>
            <span
              sx={(theme) => ({
                color: `${theme.colors.frameText}`,
                fontFamily: '"MarckScript", Ariel',
                fontSize: '28rem',
                display: 'block',
                whiteSpace: 'nowrap',
              })}
            >
              Ariella Vu
            </span>
            <span
              sx={(theme) => ({
                color: `${theme.colors.frameText}`,
                fontFamily: '"MarckScript", Ariel',
                fontSize: '14rem',
                display: 'block',
                whiteSpace: 'nowrap',
              })}
            >
              ariellavu@gmail.com
            </span>
            {/* resume button here */}
          </Fade>
        </div>

        <div
          sx={{
            flex: '4 0 auto',
            pl: [0, 4, 4],
          }}
        >
          <Fade bottom>
            <Themed.h5>
              Let&apos;s Connect!
            </Themed.h5>
            <FooterSocialIcons />
          </Fade>
        </div>

      </div>

      <span
        sx={{
          fontSize: '12rem',
          alignSelf: 'end',
          whiteSpace: 'nowrap',
        }}
      >
        © 2021 Ariella Vu. All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
