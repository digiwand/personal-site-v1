import SocialIconButtons from 'components/social-icons/SocialIconButtons';
import { PRIMARY_SOCIAL_KEYS } from 'constants/social';

function NavDrawerSocialIcons() {
  return (
    <SocialIconButtons
      className="nav-drawer-social"
      socialKeys={PRIMARY_SOCIAL_KEYS}
    />
  );
}

export default NavDrawerSocialIcons;
