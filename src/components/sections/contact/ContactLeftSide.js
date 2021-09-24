import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Themed } from 'theme-ui';
import ContactSocialIconButtons from 'components/sections/contact/SocialIconButtons';
import SVGPlantInPot from 'components/svg/plant-in-pot';

function ContactLeftSide() {
  return (
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '1 0 25%',
      maxWidth: '680rem',
      minWidth: '160rem',
      width: ['100%', '100%', '25%'],
      pb: [0, 0, '60rem'],
      textAlign: ['center', 'center', 'left'],
    }}
    >
      <div>
        <Themed.h3 sx={{ color: (t) => t.colors.contactSubHeader, pb: 3 }}>
          <Fade delay={200}>
            Let&apos;s Connect!
          </Fade>
        </Themed.h3>

        <br />

        <Fade>
          <Themed.h6 sx={{ color: (t) => t.colors.contactText }}>
            Working remotely since 2018
          </Themed.h6>
        </Fade>

        <ContactSocialIconButtons />
      </div>

      <Flip top left delay={2400} duration={1700}>
        <SVGPlantInPot
          sx={{
            width: '50%',
            maxWidth: '336rem',
            minWidth: '160rem',
            alignSelf: 'center',
            path: { fill: (t) => t.colors.contactPlant },
          }}
        />
      </Flip>
    </div>
  );
}

export default ContactLeftSide;
