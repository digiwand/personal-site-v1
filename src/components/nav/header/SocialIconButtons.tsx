import SocialIconButtons from 'components/social-icons/SocialIconButtons';
import { PRIMARY_SOCIAL_KEYS } from 'constants/social';

const totalDurationOfTabs = 1400;

function NavSocialIconButtons() {
  return (
    <div className="nav-header-social h-[40rem] flex items-center pl-16 pr-[4px]">
      <SocialIconButtons
        className="NavHeader_SocialIconButton btn-icon-small"
        revealDelay={totalDurationOfTabs}
        socialKeys={PRIMARY_SOCIAL_KEYS}
      />
    </div>
  );
}

export default NavSocialIconButtons;
