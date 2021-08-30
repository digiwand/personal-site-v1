import NavTab from 'components/nav/header/Tab';
import PropTypes from 'prop-types';
import { SECTION_DISPLAY_NAME } from 'constants/section';

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
      />
    );
  });

  return (
    <nav
      className="NavTabs"
      sx={{
        position: 'relative',

        '[is-active="true"]': {
          fontWeight: 700,
          borderBottom: (t) => `2rem solid ${t.colors.text}`,
        },
      }}
    >
      {tabs}
    </nav>
  );
}

NavTabs.propTypes = propTypes;

export default NavTabs;
