import Fade from 'react-reveal';

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
          height: ['calc(100% + 20rem)', 'calc(100% + 20rem)', '100%'],
          width: ['calc(100% + 20rem)', 'calc(100% + 20rem)', '100%'],
          bottom: ['-10rem', '-10rem', '20rem'],
          left: ['-10rem', '-10rem', '20rem'],
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
