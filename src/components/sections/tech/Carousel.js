import TECH from 'constants/tech';

const imgWidth = 180;
const imgHeight = 120;
const imgPadding = 10;

const panelWidth = imgWidth + 2 * imgPadding;
const panelHeight = imgHeight + 2 * imgPadding;

const TECH_KEYS = Object.keys(TECH);
const numOfPanels = TECH_KEYS.length;
const rotationDeg = (360 / numOfPanels);

/**
 * Tangent equation:
 * tangent(half of rotation deg) = opposite (panelWidth) / adjacent (radius)
 *
 *               ^
 *              /|\
 *             / |*\       <--  * = half of rotation deg
 *            /  |  \
 *           /   |   \
 *          /    |r   \
 *         /     |     \
 *        /      |      \
 *       /_______|_______\
 *                 [panelWidth/2]
 *      [                 ]
 *               ^
 *               |
 *    panel that shows tech icon
 *
 */
const radius = Math.round((panelWidth / 2) / Math.tan(Math.PI / numOfPanels));

function Carousel() {
  return (
    <div
      sx={{
        perspective: '1000',
        position: 'relative',
        width: `${panelWidth}rem`,
        height: `${panelHeight}rem`,
        transition: 'transform 1s',
      }}
    >
      <div sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
      }}
      >
        {TECH_KEYS.map((key, index) => {
          const techConfig = TECH[key];

          return (
            <div
              key={techConfig.displayName}
              sx={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: `${imgWidth}rem`,
                height: `${imgHeight}rem`,
                left: `${imgPadding}rem`,
                top: `${imgPadding}rem`,
                background: 'rgba(240, 240, 240,0.9)',
                transition: 'transform 1s',
                transform: [
                  `rotateX(${rotationDeg * index}deg) translateZ(${radius}rem)`,
                  `rotateY(${rotationDeg * index}deg) translateZ(${radius}rem)`,
                  `rotateY(${rotationDeg * index}deg) translateZ(${radius}rem)`,
                ],
              }}
            >
              {techConfig.imgElem}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
