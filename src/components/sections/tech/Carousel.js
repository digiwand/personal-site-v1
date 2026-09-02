import Zoom from 'components/animations/Zoom';
import TECH from 'constants/tech';

const RECENT_TECH = [
  'NEXTJS',
  'REACTJS',
  'EMBERJS',
  'HTML5',
  'SASS',
  'CHAI',
  'MOCHA',
  'AMP_EMAIL',
  'NODEJS',
  'GIT',
  'VS_CODE',
  'ITERM2',
  'CHROME_DEV_TOOLS',
  'DASH',
  'ALFRED',
  'MAC_OS',
];

const imgWidth = 220;
const imgHeight = 120;
const imgPadding = 0;

const panelWidth = imgWidth + 2 * imgPadding;
const panelHeight = imgHeight + 2 * imgPadding;

const numOfPanels = RECENT_TECH.length;
const rotationDeg = (360 / numOfPanels);

const radius = Math.round((panelWidth / 2) / Math.tan(Math.PI / numOfPanels));

const tabletImgWidth = 120;
const tabletPanelWidth = tabletImgWidth + 2 * imgPadding;
const tabletRadius = Math.round((tabletPanelWidth / 2) / Math.tan(Math.PI / numOfPanels));

const mobileImgWidth = 85;
const mobilePanelWidth = mobileImgWidth + 2 * imgPadding;
const mobileRadius = Math.round((mobilePanelWidth / 2) / Math.tan(Math.PI / numOfPanels));

function Carousel() {
  return (
    <Zoom duration={1800}>
      <div
        className="relative transition-[width,transform] duration-1000
          w-[85rem] sm:w-[120rem] land:w-[220rem] h-[120rem]"
        style={{ perspective: '1000' }}
      >
        <div className="carousel-stage absolute w-full h-full [transform-style:preserve-3d]">
          {RECENT_TECH.map((key, index) => {
            const techConfig = TECH[key];

            return (
              <a
                key={techConfig.displayName}
                className="carousel-panel absolute flex items-center justify-center
                  w-[85rem] sm:w-[120rem] land:w-[220rem] h-[120rem]
                  bg-[var(--theme-carousel-item-bg)]
                  transition-[height,width,transform] duration-1000"
                style={{
                  left: `${imgPadding}rem`,
                  top: `${imgPadding}rem`,
                  '--panel-rotate': `${rotationDeg * index}deg`,
                  '--z-mobile': `${mobileRadius}rem`,
                  '--z-tablet': `${tabletRadius}rem`,
                  '--z-desktop': `${radius}rem`,
                }}
                href={techConfig.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {techConfig.imgElem}
              </a>
            );
          })}
        </div>
      </div>
    </Zoom>
  );
}

export default Carousel;
