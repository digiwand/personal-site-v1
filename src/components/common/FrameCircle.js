import Fade from 'react-reveal';

const frameDistance = 46;
const frameDistanceMobile = 34;

function FrameCircle({ children, ...props }) {
  const { className } = props;

  return (
    <Fade>
      <div
        className={className}
        sx={{
          position: 'relative',
        }}
      >
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
        <div sx={{
          display: 'block',
          borderRadius: '50%',
          overflow: 'hidden',
          aspectRatio: '1/1',
        }}
        >
          {children}
        </div>
      </div>
    </Fade>
  );
}

export default FrameCircle;
