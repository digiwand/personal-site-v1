import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';
import ContactSocialIconButtons from 'components/sections/contact/SocialIconButtons';
import SVGPlantInPot from 'components/svg/plant-in-pot';

function ContactLeftSide() {
  return (
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 25%',
      maxWidth: '680rem',
      width: ['100%', '100%', '25%'],
      textAlign: ['center', 'center', 'left'],
    }}
    >
      <Fade>
        <Themed.h3 sx={{ color: (t) => t.colors.contactSubHeader }}>
          Let&apos;s connect!
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

      <SVGPlantInPot
        sx={{
          width: ['50%'],
          maxWidth: '336rem',
          alignSelf: 'center',
          path: { fill: (t) => t.colors.contactPlant },
        }}
      />
    </div>
  );
}

export default ContactLeftSide;
