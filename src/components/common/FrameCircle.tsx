import React, { ReactElement } from 'react';
import Fade from 'components/animations/Fade';
import AspectRatio from 'components/common/AspectRatio';
import { cn } from 'lib/cn';

type Props = {
  children: ReactElement,
  className?: string,
};

/**
 * To use FrameCircle, pass an image element as the "children" prop
 *
 * @example
    <FrameCircle className="ParentComponent_FrameCircle">
      <img src="/example.png" alt="example" />
    </FrameCircle>
 */
function FrameCircle({ children, className = '' }: Props) {
  const Image = React.cloneElement(children, {
    style: {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'top',
      width: '100%',
      height: '100%',
    },
  });

  return (
    <div className={cn('relative', className)}>
      <Fade>
        <div>
          <div
            className="u-glass absolute rounded-full
              h-[calc(100%+34rem)] w-[calc(100%+34rem)] -bottom-[17rem] -left-[17rem]
              land:h-[calc(100%+46rem)] land:w-[calc(100%+46rem)] land:-bottom-[23rem] land:-left-[23rem]
              [box-shadow:rgba(120,120,120,0.8)_2rem_2rem_13rem_0rem]"
          />
          <AspectRatio className="rounded-full">
            {Image}
          </AspectRatio>
        </div>
      </Fade>
    </div>
  );
}

export default FrameCircle;
