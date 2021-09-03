import Fade from 'react-reveal';

const frameDistance = 26;

function OffsetFrame({ children, ...props }) {
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
          background: (t) => t.colors.aboutFrame,
          position: 'absolute',
          height: [`calc(100% + ${frameDistance}rem)`, `calc(100% + ${frameDistance}rem)`, '100%'],
          width: [`calc(100% + ${frameDistance}rem)`, `calc(100% + ${frameDistance}rem)`, '100%'],
          bottom: [`-${frameDistance / 2}rem`, `-${frameDistance / 2}rem`, '20rem'],
          left: [`-${frameDistance / 2}rem`, `-${frameDistance / 2}rem`, '20rem'],
          zIndex: '-1',
          boxShadow: 'rgba(40, 40, 40, 1) 2px 2px 13px 0px',
        }}
        />
        {children}
      </div>
    </Fade>
  );
}

export default OffsetFrame;
