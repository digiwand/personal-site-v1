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

function PriceSpiderImgs() {
  return (
    <div sx={{
      position: 'relative',
      flex: '1 0 auto',
      minHeight: '420rem',
      alignSelf: 'center',
      width: ['100%', '100%', 'auto'],
      py: [5, null, null],
    }}
    >

      <div sx={{
        position: 'relative',
        flex: '1 1 auto',
        textAlign: 'right',
      }}
      >
        <Image
          alt="PriceSpider Mars Where-to-buy"
          src="images/work/pricespider-wtb-mars.png"
          sx={{
            position: 'relative',
            maxWidth: '320rem',
            border: '3px double #F3E5D2',
            width: ['50%', '50%', '70%'],

            ...hoverSX,
          }}
        />
        <Image
          alt="PriceSpider Iams Where-to-buy"
          src="images/work/pricespider-wtb-iams.png"
          sx={{
            position: 'absolute',
            top: '62rem',
            width: ['64%', '60%', '56%'],
            left: ['0', '-10px', '-30px'],

            ...hoverSX,
          }}
        />
        <Image
          alt="PriceSpider Hoover & Dell Ads"
          src="images/work/pricespider-ads.png"
          sx={{
            position: 'absolute',
            width: '70%',
            right: ['24px', '-10px', '-68px'],
            bottom: ['-3px', '-46px', '-46px'],

            ...hoverSX,
          }}
        />
      </div>
    </div>

  );
}

export default PriceSpiderImgs;
