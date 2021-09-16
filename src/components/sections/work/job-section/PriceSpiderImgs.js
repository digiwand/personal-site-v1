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

function PriceSpiderImgs() {
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
        alt="PriceSpider Mars Where-to-buy"
        src="images/work/pricespider-wtb-mars.png"
        sx={{
          zIndex: '2',
          top: 0,
          bottom: '20%',
          left: '0',
          right: ['auto', 'auto', 'none'],

          ...imgStyles,
        }}
      />
      <Image
        alt="PriceSpider Iams Where-to-buy"
        src="images/work/pricespider-wtb-iams.png"
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
        alt="PriceSpider Hoover & Dell Ads"
        src="images/work/pricespider-ads.png"
        sx={{
          zIndex: '0',
          bottom: '0',
          right: '0',
          top: '20%',

          ...imgStyles,
        }}
      />
    </div>
  );
}

export default PriceSpiderImgs;
