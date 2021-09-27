import PropTypes from 'prop-types';
import { Image } from 'theme-ui';

import AspectRatio from 'components/common/AspectRatio';

function generateImage(imgConfig) {
  const type = imgConfig.type || 'png';

  return (
    <picture>
      <source
        srcSet={`/images/work/${imgConfig.srcName}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/images/work/${imgConfig.srcName}.${type}`}
        type={`image/${type}`}
      />
      <Image alt={imgConfig.alt} src={`/images/work/${imgConfig.srcName}.${type}`} />
    </picture>
  );
}

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
        {generateImage(imgConfigs[0])}
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
        {generateImage(imgConfigs[1])}
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
        {generateImage(imgConfigs[2])}
      </AspectRatio>
    </div>
  );
}

JobSectionImgTrio.propTypes = propTypes;

export default JobSectionImgTrio;
