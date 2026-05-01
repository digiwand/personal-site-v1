import { IconButton } from 'theme-ui';
import Flip from 'components/animations/Flip';

import SOCIAL from 'constants/social';

type Props = {
  className?: string,
  revealDelay?: number,
  socialKeys: string[],
};

function SocialIconButtons({
  className = '',
  socialKeys,
  revealDelay = 0,
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

export default SocialIconButtons;
