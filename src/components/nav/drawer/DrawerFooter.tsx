import NavDrawerSocialIconButtons from 'components/nav/drawer/SocialIconButtons';

const headerAndFooterHeight = '60rem';

function DrawerFooter() {
  return (
    <div
      className="NavDrawer_footer flex h-[60rem] border-t-[1rem] border-solid border-[var(--theme-frame-border)]"
      style={{ flex: `0 0 ${headerAndFooterHeight}` }}
    >
      <NavDrawerSocialIconButtons />
    </div>
  );
}

export default DrawerFooter;
