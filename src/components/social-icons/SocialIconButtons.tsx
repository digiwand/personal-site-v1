import { IconButton } from 'theme-ui';
import Flip from 'react-reveal/Flip';

import SOCIAL from 'constants/social';

type Props = {
  className?: string,
  revealDelay?: number,
  socialKeys: string[],
};

const defaultProps = {
  className: '',
  revealDelay: 0,
};

function SocialIconButtons({
  className,
  socialKeys,
  revealDelay,
}: Props) {
  return (
    <>
      {socialKeys.map((key, index) => {
        const socialConfig = SOCIAL[key];
        return (
          <IconButton
            className={className}
            key={className + key}
          >
            <Flip top delay={revealDelay + (index + 1) * 125}>
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

SocialIconButtons.defaultProps = defaultProps;

export default SocialIconButtons;
