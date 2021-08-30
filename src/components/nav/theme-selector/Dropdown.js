import ThemeDropdownList from 'components/nav/theme-selector/DropdownList';
import ThemeNextIconButton from 'components/nav/theme-selector/NextIconButton';

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
      <ThemeNextIconButton />
      <ThemeDropdownList />
    </div>
  );
}

export default ThemeDropdown;
