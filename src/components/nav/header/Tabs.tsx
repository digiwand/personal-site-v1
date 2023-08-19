import { getColor } from '@theme-ui/color'
import NavTab from 'components/nav/header/Tab';
import { SECTION_DISPLAY_NAME } from 'constants/section';

const NAVTAB_WIDTH = 80;
const NAVTAB_MARGIN_LEFT = 16;
const NUM_OF_TABS = Object.keys(SECTION_DISPLAY_NAME).length;

function generateNavTabsUnderlineStyles() {
  const sxObj = {};
  for (let i = 0; i < NUM_OF_TABS; i += 1) {
    sxObj[`a:nth-of-type(${i + 1})`] = {
      '&[is-active="true"] ~ .NavTab_activeUnderline': {
        transform: `translateX(${i * (NAVTAB_WIDTH + NAVTAB_MARGIN_LEFT)}rem)`,
      },
      '&.NavTab:hover ~ .NavTab_activeUnderline': {
        transform: `translateX(${i * (NAVTAB_WIDTH + NAVTAB_MARGIN_LEFT)}rem)`,
      },
    };
  }
  return sxObj;
}

function Underline() {
  return (
    <div
      className="NavTab_activeUnderline"
      sx={{
        position: 'absolute',
        height: '2rem',
        width: '80rem',
        transition: '0.3s ease-in-out',
        background: (t) => getColor(t, 'text'),
        bottom: '0',
        left: '0',
      }}
    />
  );
}

function NavTabs({ activeSectionId } : { activeSectionId: string }) {
  const tabs = Object.keys(SECTION_DISPLAY_NAME).map((key, index) => {
    const displayName = SECTION_DISPLAY_NAME[key];
    return (
      <NavTab
        index={index}
        key={`NavTab-${key}`}
        href={`/#${key}`}
        displayName={displayName}
        isActive={activeSectionId === key}
        sx={{
          width: `${NAVTAB_WIDTH}rem`,
          ml: `${NAVTAB_MARGIN_LEFT}rem`,
        }}
      />
    );
  });

  return (
    <nav
      className="NavTabs"
      sx={{
        position: 'relative',
        ...generateNavTabsUnderlineStyles(),
      }}
    >
      {tabs}

      <Underline />
    </nav>
  );
}

export default NavTabs;
