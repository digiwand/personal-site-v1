import Zoom from 'react-reveal/Zoom';
import ThemeDropdownList from 'components/nav/theme-selector/DropdownList';
import ThemeNextIconButton from 'components/nav/theme-selector/NextIconButton';

const totalDurationOfTabsAndIcons = 4060;

function ThemeDropdown() {
  return (
    <div
      className="NavHeader_ThemeDropdown"
      sx={{
        position: 'relative',
        ml: 3,

        '&:hover ol': {
          visibility: 'visible',
          '.NavHeader-ThemeDropdownList_listItem': {
            transform: 'scale(1)',
          },
        },
        '&:not(:hover) ol .NavHeader-ThemeDropdownList_listItem': {
          transitionDelay: '150ms',
        },
      }}
    >
      <Zoom delay={totalDurationOfTabsAndIcons + 400} duration={600}>
        <ThemeNextIconButton />
      </Zoom>
      <ThemeDropdownList />
    </div>
  );
}

export default ThemeDropdown;
