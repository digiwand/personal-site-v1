import NavTab from 'components/nav/navTabs/NavTab';
import PropTypes from 'prop-types';

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
};

function NavTabs({ children, ...props }) {
  const { activeSectionId } = props;

  return (
    <nav
      className="NavTabs"
      sx={{
        '[is-active="true"]': {
          fontWeight: 700,
        },
      }}
    >
      <NavTab href="#home" displayName="Home" isActive={activeSectionId === 'home'} />
      <NavTab href="#about" displayName="About" isActive={activeSectionId === 'about'} />
      <NavTab href="#tech" displayName="Tech" isActive={activeSectionId === 'tech'} />
      <NavTab href="#work" displayName="Work" isActive={activeSectionId === 'work'} />
      <NavTab href="#contact" displayName="Contact" isActive={activeSectionId === 'contact'} />
    </nav>
  );
}

NavTabs.propTypes = propTypes;

export default NavTabs;
