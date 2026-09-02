import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', /* 'twitter', */ 'linkedin'];

const totalDurationOfTabs = 1400;

function NavSocialIconButtons() {
  return (
    <div className="nav-header-social h-[40rem] flex items-center pl-16 pr-[4px]">
      <SocialIconButtons
        className="NavHeader_SocialIconButton btn-icon-small"
        revealDelay={totalDurationOfTabs}
        socialKeys={socialKeys}
      />
    </div>
  );
}

export default NavSocialIconButtons;
