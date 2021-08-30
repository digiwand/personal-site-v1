import { Image } from 'theme-ui';

const imgStyles = {
  position: 'absolute',
  m: 'auto',
  opacity: '0.85',
  maxWidth: '650rem',
  width: ['75%', '60%', '53%'],
  transform: 'perspective(750px)',
  transition: '0.25s',

  '&:hover': {
    opacity: '1',
    zIndex: '3',
    transform: 'perspective(750px) translateZ(20px)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 3px 5px 15px 0px',
  },
};

function CopperImgs() {
  return (
    <div sx={{
      position: 'relative',
      flex: '1 0 auto',
      minHeight: '420rem',
      width: ['100%', '100%', 'auto'],
      alignSelf: 'center',
      my: [5, null, null],
    }}
    >
      <Image
        alt="Copper Companies Page"
        src="images/work/copper-companies-list.png"
        sx={{
          zIndex: '0',
          bottom: '0',
          right: '0',
          left: ['auto', 'auto', '25%'],
          top: ['auto', 'auto', '25%'],

          ...imgStyles,
        }}
      />
      <Image
        alt="Copper Contact Page"
        src="images/work/copper-contact.jpeg"
        sx={{
          zIndex: '1',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',

          ...imgStyles,
        }}
      />
      <Image
        alt="Copper AMP Email Gif"
        src="images/work/copper-amp-email.png"
        sx={{
          zIndex: '2',
          top: '0',
          left: '0',
          bottom: ['auto', 'auto', '25%'],
          right: ['auto', 'auto', '25%'],

          ...imgStyles,
        }}
      />
    </div>
  );
}

export default CopperImgs;
