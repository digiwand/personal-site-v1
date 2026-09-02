import Zoom from 'components/animations/Zoom';
import ThemeDropdownList from 'components/nav/theme-selector/DropdownList';
import ThemeNextIconButton from 'components/nav/theme-selector/NextIconButton';

const totalDurationOfTabsAndIcons = 1900;

function ThemeDropdown() {
  return (
    <div className="nav-theme-dropdown relative ml-16">
      <Zoom delay={totalDurationOfTabsAndIcons + 100} duration={500}>
        <ThemeNextIconButton />
      </Zoom>
      <ThemeDropdownList />
    </div>
  );
}

export default ThemeDropdown;
