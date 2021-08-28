import { IconButton } from 'theme-ui';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import SOCIAL from 'constants/social';

const propTypes = {
  className: PropTypes.string,
  socialKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
  className: '',
};

function SocialIconButtons({ className, socialKeys }) {
  const socialIconButtons = socialKeys.map((key, index) => {
    const socialConfig = SOCIAL[key];
    return (
      <Fade cascade key={key} delay={(index + 1) * 255}>
        <IconButton
          className={className}
          key={key}
        >
          <a href={socialConfig.url} target="_blank" rel="noopener noreferrer">
            {socialConfig.iconSVG}
          </a>
        </IconButton>
      </Fade>
    );
  });

  return (
    <>
      {socialIconButtons}
    </>
  );
}

SocialIconButtons.propTypes = propTypes;
SocialIconButtons.defaultProps = defaultProps;

export default SocialIconButtons;
