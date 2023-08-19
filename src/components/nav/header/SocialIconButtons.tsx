import { getColor } from '@theme-ui/color'
import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', 'twitter', 'linkedin'];

const totalDurationOfTabs = 1400;

function NavSocialIconButtons() {
  return (
    <div
      sx={{
        height: '40rem',
        display: 'flex',
        alignItems: 'center',
        pl: 2,
      }}
    >
      <SocialIconButtons
        className="NavHeader_SocialIconButton"
        sx={{
          variant: 'buttons.icon.small',
          '&:hover svg path': {
            fill: (t) => getColor(t, 'navTabHoverColor'),
          },
        }}
        revealDelay={totalDurationOfTabs}
        socialKeys={socialKeys}
      />
    </div>
  );
}

export default NavSocialIconButtons;
