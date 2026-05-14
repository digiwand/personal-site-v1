import { getColor } from '@theme-ui/color';
import Fade from 'components/animations/Fade';
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
        <div sx={{ 
          variant: 'text.heading',
          color: (t) => getColor(t, 'contactSubHeader'), 
          pb: 3,
          fontSize: [3, 4, 4],
          letterSpacing: '5rem',

          /** @hack: fix uneven alignment */
          marginBottom: '6px',
        }}>
          <Fade delay={200}>
            Let&apos;s Connect!
          </Fade>
        </div>

        <br />

        <Fade>
          <h6 sx={{ color: (t) => getColor(t, 'contactText') }}>
            After working remotely since 2018,
            <br />
            I&apos;m open to opportunities, location-based
            <br />
            (SF, bay area, NY, other) or remote
          </h6>
        </Fade>

        <ContactSocialIconButtons />
      </div>

      <Fade delay={1000} duration={2400}>
        <SVGPlantInPot
          sx={{
            width: '50%',
            maxWidth: '336rem',
            minWidth: '160rem',
            alignSelf: 'center',
            path: { fill: (t) => getColor(t, 'contactPlant') },
          }}
        />
      </Fade>
    </div>
  );
}

export default ContactLeftSide;
