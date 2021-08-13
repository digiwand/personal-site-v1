import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui';

import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const propTypes = {
  socialKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function FooterSocialIconButtons({ className, label, socialKeys }) {
  return (
    <div
      className={className}
      sx={{
        flex: '1 0 auto',
        pr: [0, 0, 3],
        pb: 3,
      }}
    >
      <Themed.h6 sx={{ pb: 3 }}>
        {label}
      </Themed.h6>

      <Fade>
        <SocialIconButtons
          sx={{
            mr: 3,

            '&:last-child': {
              mr: 0,
            },
          }}
          socialKeys={socialKeys}
        />
      </Fade>
    </div>
  );
}

FooterSocialIconButtons.propTypes = propTypes;
FooterSocialIconButtons.defaultProps = defaultProps;

export default FooterSocialIconButtons;
