import { Image } from 'theme-ui';

/**
 * Use padding-height because aspect-ratio is not supported by mobile
 * and other browsers. This is a known hack to support aspect ratios for
 * responsive images.
 */
const aspectRatioStyles = {
  display: 'block',
  overflow: 'hidden',
  height: '0',
  '--aspect-ratio': '3/1',
  paddingBottom: 'calc(100%/(var(--aspect-ratio)))',

  borderRadius: '4rem',

  opacity: '0.95',
  maxWidth: '650rem',
  transform: 'perspective(420px)',
  transition: '0.12s ease',
  width: ['75%', '50%', '43%'],
  border: (t) => t.colors.workImgBorder,

  '&:hover': {
    transition: '0.35s ease-in-out',
    opacity: '1',
    zIndex: '3',
    transform: 'perspective(420px) translateZ(24px)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 3px 5px 15px 0px',
  },
};

const imgStyles = {
  position: 'absolute',
  objectFit: 'cover',
  objectPosition: 'top',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

function PriceSpiderImgs() {
  return (
    <div sx={{
      position: 'relative',
      textAlign: 'center',
      width: ['100%', '100%', 'auto'],
      my: 4,
    }}
    >
      <div sx={{
        position: 'absolute',
        zIndex: '2',
        top: '-20%',
        bottom: '0',
        left: '0',
        right: ['auto', 'auto', 'initial'],
        ...aspectRatioStyles,
      }}
      >
        <Image
          alt="PriceSpider Mars Where-to-buy"
          src="images/work/pricespider-wtb-mars.png"
          sx={{ ...imgStyles }}
        />
      </div>
      <div sx={{
        position: 'relative',
        zIndex: '1',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        m: 'auto',

        ...aspectRatioStyles,
      }}
      >
        <Image
          alt="PriceSpider Iams Where-to-buy"
          src="images/work/pricespider-wtb-iams.png"
          sx={{ ...imgStyles }}
        />
      </div>
      <div sx={{
        position: 'absolute',
        zIndex: '0',
        bottom: '0',
        right: '0',
        top: '20%',

        ...aspectRatioStyles,
      }}
      >
        <Image
          alt="PriceSpider Hoover & Dell Ads"
          src="images/work/pricespider-ads.png"
          sx={{
            ...imgStyles,
          }}
        />
      </div>
    </div>
  );
}

export default PriceSpiderImgs;
