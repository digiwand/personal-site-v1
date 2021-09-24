import { IconButton } from 'theme-ui';
import PropTypes from 'prop-types';
import Flip from 'react-reveal/Flip';

import SOCIAL from 'constants/social';

const propTypes = {
  className: PropTypes.string,
  revealDelay: PropTypes.number,
  socialKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
  className: '',
  revealDelay: 0,
};

function SocialIconButtons({ className, socialKeys, revealDelay }) {
  return (
    <>
      {socialKeys.map((key, index) => {
        const socialConfig = SOCIAL[key];
        return (
          <IconButton
            className={className}
            key={className + key}
          >
            <Flip top delay={revealDelay + (index + 1) * 340}>
              <a href={socialConfig.url} target="_blank" rel="noopener noreferrer">
                {socialConfig.iconSVG}
              </a>
            </Flip>
          </IconButton>
        );
      })}
    </>
  );
}

SocialIconButtons.propTypes = propTypes;
SocialIconButtons.defaultProps = defaultProps;

export default SocialIconButtons;
