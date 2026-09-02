import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', /* 'twitter', */ 'linkedin'];

function NavDrawerSocialIcons() {
  return (
    <SocialIconButtons
      className="nav-drawer-social"
      socialKeys={socialKeys}
    />
  );
}

export default NavDrawerSocialIcons;
