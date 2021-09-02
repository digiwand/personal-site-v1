import Fade from 'react-reveal';

function OffsetFrame({ children, ...props }) {
  const { className } = props;

  return (
    <Fade>
      <div
        className={className}
        sx={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <div sx={{
          background: (t) => t.colors.aboutFrame,
          position: 'absolute',
          height: '100%',
          width: '100%',
          bottom: '20px',
          left: '20px',
          zIndex: '-1',
        }}
        />
        {children}
      </div>
    </Fade>
  );
}

export default OffsetFrame;
