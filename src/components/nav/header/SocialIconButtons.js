import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', 'jsfiddle', 'linkedin'];

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
            fill: (t) => t.colors.navTabHoverColor,
          },
        }}
        revealDelay={totalDurationOfTabs}
        socialKeys={socialKeys}
      />
    </div>
  );
}

export default NavSocialIconButtons;
