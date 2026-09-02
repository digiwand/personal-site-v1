import DrawerHeader from 'components/nav/drawer/DrawerHeader';
import DrawerFooter from 'components/nav/drawer/DrawerFooter';
import NavDrawerItem from 'components/nav/drawer/DrawerItem';
import ThemeNavDrawerItem from 'components/nav/drawer/ThemeDrawerItem';

import { SECTION_DISPLAY_NAME } from 'constants/section';

type Props = {
  activeSectionId: string,
  handleCloseMenu(): void,
  isOpen: boolean,
};

function NavDrawer({ activeSectionId, handleCloseMenu, isOpen }: Props) {
  const drawerItems = Object.keys(SECTION_DISPLAY_NAME).map((key) => {
    const displayName = SECTION_DISPLAY_NAME[key];
    return (
      <NavDrawerItem
        key={`NavDrawerItem-${key}`}
        href={`/#${key}`}
        displayName={displayName}
        isActive={activeSectionId === key}
        handleCloseMenu={handleCloseMenu}
      />
    );
  });

  return (
    <aside
      className="u-glass nav-drawer"
      data-open={String(isOpen)}
    >
      <DrawerHeader handleCloseMenu={handleCloseMenu} />

      <div className="u-scrollbar flex-[1_1_auto] flex justify-center flex-col min-h-min h-full overflow-x-hidden">
        <div className="flex flex-col flex-[1_1_auto] h-full min-h-min">
          <nav className="NavDrawer_nav flex flex-col pb-64 mt-auto">
            {drawerItems}
          </nav>

          <ThemeNavDrawerItem handleCloseMenu={handleCloseMenu} />
        </div>
      </div>

      <DrawerFooter />
    </aside>
  );
}

export default NavDrawer;
