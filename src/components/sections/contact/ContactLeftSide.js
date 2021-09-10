import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ContactSocialIconButtons from 'components/sections/contact/SocialIconButtons';
import SVGPlantInPot from 'components/svg/plant-in-pot';

function ContactLeftSide() {
  return (
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 25%',
      maxWidth: '680rem',
      minWidth: '160rem',
      width: ['100%', '100%', '25%'],
      textAlign: ['center', 'center', 'left'],
      pb: [0, 0, '60rem'],
    }}
    >
      <Fade>
        <Themed.h3 sx={{ color: (t) => t.colors.contactSubHeader }}>
          Let&apos;s Connect!
        </Themed.h3>
      </Fade>

      <br />

      <Fade>
        <Themed.h6 sx={{ color: (t) => t.colors.contactText }}>
          Working remotely since 2018
        </Themed.h6>
      </Fade>
      <ContactSocialIconButtons />

      <br />
      <br />
      <Fade delay={800}>
        <SVGPlantInPot
          sx={{
            width: ['50%'],
            maxWidth: '336rem',
            minWidth: '160rem',
            alignSelf: 'center',
            path: { fill: (t) => t.colors.contactPlant },
          }}
        />
      </Fade>
    </div>
  );
}

export default ContactLeftSide;
