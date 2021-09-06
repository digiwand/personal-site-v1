import PropTypes from 'prop-types';

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
        background: (t) => t.colors.text,
        bottom: '0',
        left: '0',
      }}
    />
  );
}

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
};

function NavTabs({ children, ...props }) {
  const { activeSectionId } = props;

  const tabs = Object.keys(SECTION_DISPLAY_NAME).map((key) => {
    const displayName = SECTION_DISPLAY_NAME[key];
    return (
      <NavTab
        key={`NavTab-${key}`}
        href={`/#${key}`}
        displayName={displayName}
        isActive={activeSectionId === key}
        sx={{
          fontFamily: 'heading',
          fontWeight: '500',
          letterSpacing: '3rem',
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

NavTabs.propTypes = propTypes;

export default NavTabs;
