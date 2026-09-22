import Flip from 'components/animations/Flip';
import { cn } from 'lib/cn';

import SOCIAL from 'constants/social';

interface Props {
  socialKeys: string[];
  
  className?: string;
  revealDelay?: number;
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
          <button
            type="button"
            className={cn('btn-icon', className)}
            key={className + key}
          >
            <Flip top delay={revealDelay + (index + 1) * 125}>
              <a href={socialConfig.url} target="_blank" rel="noopener noreferrer">
                {socialConfig.iconSVG}
              </a>
            </Flip>
          </button>
        );
      })}
    </>
  );
}

export default SocialIconButtons;
