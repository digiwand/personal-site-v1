import { getColor } from '@theme-ui/color';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Heading } from 'theme-ui';
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
        <Heading as="h3" sx={{ color: (t) => getColor(t, 'contactSubHeader'), pb: 3 }}>
          <Fade delay={200}>
            Let&apos;s Connect!
          </Fade>
        </Heading>

        <br />

        <Fade>
          <Heading as="h6" sx={{ color: (t) => getColor(t, 'contactText') }}>
            Working remotely since 2018
          </Heading>
        </Fade>

        <ContactSocialIconButtons />
      </div>

      <Flip top left delay={2150} duration={1700}>
        <SVGPlantInPot
          sx={{
            width: '50%',
            maxWidth: '336rem',
            minWidth: '160rem',
            alignSelf: 'center',
            path: { fill: (t) => getColor(t, 'contactPlant') },
          }}
        />
      </Flip>
    </div>
  );
}

export default ContactLeftSide;
