import { Image } from 'theme-ui';

const hoverSX = {
  transition: '0.25s',
  opacity: '0.85',

  '&:hover': {
    opacity: '1',
    zIndex: '3',
    transform: 'perspective(500px) translateZ(20px)',
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
          position: 'absolute',
          zIndex: '0',
          m: 'auto',
          bottom: '0',
          right: '0',
          maxWidth: '650rem',
          width: ['75%', '60%', '53%'],
          left: ['auto', 'auto', '25%'],
          top: ['auto', 'auto', '25%'],

          ...hoverSX,
        }}
      />
      <Image
        alt="Copper Contact Page"
        src="images/work/copper-contact.jpeg"
        sx={{
          position: 'absolute',
          zIndex: '1',
          m: 'auto',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          maxWidth: '650rem',
          width: ['75%', '60%', '53%'],

          ...hoverSX,
        }}
      />
      <Image
        alt="Copper AMP Email Gif"
        src="gifs/copper-amp-email.gif"
        sx={{
          position: 'absolute',
          zIndex: '2',
          m: 'auto',
          top: '0',
          left: '0',
          maxWidth: '650rem',
          width: ['75%', '60%', '53%'],
          bottom: ['auto', 'auto', '25%'],
          right: ['auto', 'auto', '25%'],

          ...hoverSX,
        }}
      />
    </div>

  );
}

export default CopperImgs;
