import { getColor } from '@theme-ui/color';
import { ReactNode, useCallback } from 'react';
import { Button } from 'theme-ui';

import Fade from 'components/animations/Fade';
import TECH from 'constants/tech';

import { ImgTrio } from '../img-trio/ImgTrio';
import { WorkImageConfig } from 'components/sections/work/shared/constants';

interface Props {
  companyName: string;
  techKeys: string[];
  title: string;
  subtitle: string;
  date: string;
  
  children?: ReactNode;
  className?: string;
  imgConfigs?: WorkImageConfig[];
  workCarouselSlideOffset?: number;
  onOpenWorkCarousel?: (globalIndex: number) => void;
}

function Work({ children, ...props }: Props) {
  const {
    className,
    companyName,
    title,
    subtitle,
    date,
    imgConfigs,
    techKeys,
    onOpenWorkCarousel,
    workCarouselSlideOffset = 0,
  } = props;

  const openCarouselFromTrio = useCallback((localIndex: number) => {
    onOpenWorkCarousel?.(workCarouselSlideOffset + localIndex);
  }, [onOpenWorkCarousel, workCarouselSlideOffset]);

  return (
    <div
      className={className}
      sx={{
        gridColumnStart: 'content-start',
        maxWidth: '850rem',
      }}
    >
      <Fade>
        <div
          className="u-glass"
          sx={{
            pt: 5,
            pb: 4,
            px: [3, 4, 4],
            textAlign: ['center', 'left', 'left'],
          }}
        >
          <h2
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: ['block', 'block', 'inline-block'],
            pr: [0, 0, 3],
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => getColor(t, 'workHeader'),
          }}
          >
            {title} • {subtitle}
          </h2>

          <h4
            sx={{
            display: 'block',
            pt: [3, 4, 4],
            pb: 1,
            color: (t) => getColor(t, 'workSubHeader'),
          }}
          >
            {companyName}
          </h4>

          <h5 sx={{ color: (t) => getColor(t, 'workHeader') }}>
            {date}
          </h5>

          <p sx={{ variant: 'text.body', py: 4, textAlign: 'left' }}>
            {children}
          </p>

          <div sx={{
            pt: [3, 3, 2],
            pb: [3, 3, 4],
            textAlign: 'left',
          }}
          >
            {techKeys.map((techKey) => (
              <Button
                variant="tag"
                key={`${companyName}-tech-${techKey}`}
              >
                <a href={TECH[techKey].href} target="_blank" rel="noopener noreferrer">
                  {TECH[techKey].displayName}
                </a>
              </Button>
            ))}
          </div>

          {imgConfigs && onOpenWorkCarousel && (
            <ImgTrio
              imgConfigs={imgConfigs}
              onOpenCarousel={openCarouselFromTrio}
            />
          )}

        </div>
      </Fade>
    </div>
  );
}



export default Work;
