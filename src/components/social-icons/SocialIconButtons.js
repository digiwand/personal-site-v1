import { IconButton } from 'theme-ui';
import PropTypes from 'prop-types';

import SOCIAL from 'constants/social';

const propTypes = {
  socialKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function SocialIconButtons({ className, socialKeys }) {
  const socialIconButtons = socialKeys.map((key) => {
    const socialConfig = SOCIAL[key];
    return (
      <IconButton
        className={className}
        sx={(theme) => ({
          path: {
            fill: `${theme.colors.frameText}`,
          },
        })}
        key={key}
      >
        <a href={socialConfig.url} target="_blank" rel="noopener noreferrer">
          {socialConfig.iconSVG}
        </a>
      </IconButton>
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
