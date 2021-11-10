import React from 'react';
import Fade from 'react-reveal';
import AspectRatio from 'components/common/AspectRatio';

const frameDistance = 46;
const frameDistanceMobile = 34;

/**
 * To use FrameCircle, pass an image element as the "children" prop
 *
 * @example
    <FrameCircle className="ParentComponent_FrameCircle">
      <img src="/example.png" alt="example" />
    </FrameCircle>
 */
function FrameCircle({ children, ...props }) {
  const { className } = props;
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
    <div
      className={className}
      sx={{ position: 'relative' }}
    >
      <Fade>
        <div>
          <div sx={{
            position: 'absolute',
            variant: 'glass',
            height: [
              `calc(100% + ${frameDistanceMobile}rem)`,
              `calc(100% + ${frameDistanceMobile}rem)`,
              `calc(100% + ${frameDistance}rem)`,
            ],
            width: [
              `calc(100% + ${frameDistanceMobile}rem)`,
              `calc(100% + ${frameDistanceMobile}rem)`,
              `calc(100% + ${frameDistance}rem)`,
            ],
            bottom: [
              `-${frameDistanceMobile / 2}rem`,
              `-${frameDistanceMobile / 2}rem`,
              `-${frameDistance / 2}rem`,
            ],
            left: [
              `-${frameDistanceMobile / 2}rem`,
              `-${frameDistanceMobile / 2}rem`,
              `-${frameDistance / 2}rem`,
            ],
            zIndex: '-1',
            boxShadow: 'rgba(120, 120, 120, 0.8) 2rem 2rem 13rem 0rem',
            borderRadius: '50%',
          }}
          />
          <AspectRatio sx={{ borderRadius: '50%' }}>
            {Image}
          </AspectRatio>
        </div>
      </Fade>
    </div>
  );
}

export default FrameCircle;
