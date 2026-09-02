import { ReactNode, useCallback } from 'react';

import Fade from 'components/animations/Fade';
import TECH from 'constants/tech';
import { cn } from 'lib/cn';

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
    <div className={cn('work-col-content max-w-[850rem]', className)}>
      <Fade>
        <div className="u-glass rounded-[10rem] pt-64 pb-16 px-16 sm:px-32 text-center sm:text-left">
          <h2
            className="font-heading2 text-shadow-theme block land:inline-block pr-0 land:pr-16
              tracking-[-0.5rem] sm:tracking-[3rem] text-[var(--theme-work-header)]"
          >
            {title} • {subtitle}
          </h2>

          <h4 className="block pt-16 sm:pt-32 pb-4 text-[var(--theme-work-sub-header)]">
            {companyName}
          </h4>

          <h5 className="text-[var(--theme-work-header)]">
            {date}
          </h5>

          <p className="text-body py-32 text-left">
            {children}
          </p>

          <div className="pt-16 land:pt-8 pb-16 land:pb-32 text-left">
            {techKeys.map((techKey) => (
              <button
                type="button"
                className="btn-tag"
                key={`${companyName}-tech-${techKey}`}
              >
                <a href={TECH[techKey].href} target="_blank" rel="noopener noreferrer">
                  {TECH[techKey].displayName}
                </a>
              </button>
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
