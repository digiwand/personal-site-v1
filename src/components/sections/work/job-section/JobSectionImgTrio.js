import PropTypes from 'prop-types';
import { Image } from 'theme-ui';

import AspectRatio from 'components/common/AspectRatio';

const aspectRatioStyles = {
  borderRadius: '4rem',
  opacity: '0.95',
  transform: 'perspective(420px)',
  transition: '0.12s ease',
  width: ['75%', '50%', '43%'],
  maxWidth: '650rem',
  '--aspect-ratio': ['2/1', '7/2', '7/2'],
  paddingBottom: 'calc(100%/(var(--aspect-ratio)))',
  border: (t) => t.colors.workImgBorder,

  '&:hover': {
    transition: '0.35s ease-in-out',
    opacity: '1',
    zIndex: '3',
    transform: 'perspective(420px) translateZ(24px)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 3px 5px 15px 0px',
  },
};

const propTypes = {
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  })).isRequired,
};

function JobSectionImgTrio({ imgConfigs }) {
  return (
    <div sx={{
      position: 'relative',
      textAlign: 'center',
      width: ['100%', '100%', 'auto'],
      my: 5,
    }}
    >
      <AspectRatio
        sx={{
          position: 'absolute',
          zIndex: '2',
          top: '-20%',
          bottom: '0',
          left: '0',
          right: ['auto', 'auto', 'initial'],
          ...aspectRatioStyles,
        }}
      >
        <Image
          alt={imgConfigs[0].alt}
          src={imgConfigs[0].src}
        />
      </AspectRatio>

      <AspectRatio
        sx={{
          zIndex: '1',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          m: 'auto',
          ...aspectRatioStyles,
        }}
      >
        <Image
          alt={imgConfigs[1].alt}
          src={imgConfigs[1].src}
        />
      </AspectRatio>

      <AspectRatio
        sx={{
          position: 'absolute',
          zIndex: '0',
          bottom: '0',
          right: '0',
          top: '20%',
          ...aspectRatioStyles,
        }}
      >
        <Image
          alt={imgConfigs[2].alt}
          src={imgConfigs[2].src}
        />
      </AspectRatio>
    </div>
  );
}

JobSectionImgTrio.propTypes = propTypes;

export default JobSectionImgTrio;
