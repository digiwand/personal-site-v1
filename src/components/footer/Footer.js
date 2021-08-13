import Fade from 'react-reveal/Fade';
import FooterSocialIconButtons from 'components/footer/SocialIconButtons';

const SOCIAL_KEYS = {
  CODE: [
    'stackoverflow',
    'github',
    'jsfiddle',
    'replit',
    'codepen',
  ],
  CONNECT: [
    'linkedin',
    'nomadlist',
    'twitter',
    'instagram',
    'facebook',
  ],
  CONTACT: [
    'email',
    'discord',
  ],
};

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
          flexWrap: 'wrap',
          flex: '1 0 auto',
          justifyContent: 'center',
          mx: ['auto', 0, 0],
          flexDirection: ['column', 'row', 'row'],
        }}
      >
        <div
          sx={(theme) => ({
            flex: '1 0 130rem',
            fontFamily: '"MarckScript", Ariel',
            whiteSpace: 'nowrap',
            color: `${theme.colors.frameText}`,
          })}
        >
          <Fade>
            <div css={{ fontSize: '28rem' }}>
              Ariella Vu
            </div>
            <div css={{ fontSize: '14rem' }}>
              ariellavu@gmail.com
            </div>
          </Fade>
          {/* resume button here */}
        </div>

        <FooterSocialIconButtons label="Contact" socialKeys={SOCIAL_KEYS.CONTACT} />

        <div
          sx={{
            flex: '0 0 auto',
            pl: [0, 0, 4],
          }}
        >
          <FooterSocialIconButtons label="Code" socialKeys={SOCIAL_KEYS.CODE} />
          <FooterSocialIconButtons label="Connect" socialKeys={SOCIAL_KEYS.CONNECT} />
        </div>

        <span
          sx={{
            fontSize: '12rem',
            textAlign: ['center', 'center', 'left'],
            whiteSpace: 'nowrap',
            flexBasis: '100%',
            pt: [3, 2, 0],
          }}
        >
          © 2021 Ariella Vu. All Rights Reserved.
        </span>
      </div>

    </footer>
  );
}

export default Footer;
