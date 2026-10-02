import Flip from 'components/animations/Flip';
import { cn } from 'lib/cn';

import SOCIAL, { type SocialKey } from 'constants/social';

interface Props {
  socialKeys: readonly SocialKey[];
  className?: string;
  revealDelay?: number;
}

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
          <a
            className={cn('btn-icon', className)}
            href={socialConfig.url}
            key={key}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Flip top delay={revealDelay + (index + 1) * 125}>
              {socialConfig.iconSVG}
            </Flip>
          </a>
        );
      })}
    </>
  );
}

export default SocialIconButtons;
