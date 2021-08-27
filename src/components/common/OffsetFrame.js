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
          border: (t) => `2rem solid ${t.colors.backgroundAboutHeader}`,
          position: 'absolute',
          height: '100%',
          width: '100%',
          bottom: '20px',
          left: '20px',
        }}
        />
        {children}
      </div>
    </Fade>
  );
}

export default OffsetFrame;
