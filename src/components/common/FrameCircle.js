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
          boxShadow: 'rgba(120, 120, 120, 0.8) 2px 2px 13px 0px',
          borderRadius: '50%',
        }}
        />
        <div sx={{
          display: 'inline-block',
          borderRadius: '50%',
          overflow: 'hidden',
          aspectRatio: '1/1',
          // todo: move filter out of component and rename component
          filter: 'brightness(1.12) contrast(1.03) saturate(1.08)',
        }}
        >
          {children}
        </div>
      </div>
    </Fade>
  );
}

export default FrameCircle;
