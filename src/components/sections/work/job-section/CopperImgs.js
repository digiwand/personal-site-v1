import { Image } from 'theme-ui';

const imgStyles = {
  position: 'absolute',
  m: 'auto',
  opacity: '0.95',
  objectFit: 'cover',
  objectPosition: 'top',
  aspectRatio: '7.7/6',
  maxWidth: '650rem',
  width: ['75%', '50%', '43%'],
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
      minHeight: '350rem',
      width: ['100%', '100%', 'auto'],
      alignSelf: 'center',
      mt: 4,
    }}
    >
      <Image
        alt="Copper Companies Page"
        src="images/work/copper-companies-list.png"
        sx={{
          zIndex: '0',
          bottom: '0',
          right: '0',
          top: '20%',

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
          top: 0,
          bottom: '20%',
          left: '0',
          right: ['auto', 'auto', 'none'],

          ...imgStyles,
        }}
      />
    </div>
  );
}

export default CopperImgs;
