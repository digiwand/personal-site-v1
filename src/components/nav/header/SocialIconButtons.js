import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', 'jsfiddle', 'linkedin'];

function NavSocialIconButtons() {
  return (
    <div
      sx={{
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        pl: 2,
      }}
    >
      <SocialIconButtons
        className="NavHeader_SocialIconButton"
        sx={{
          variant: 'buttons.icon.small',
        }}
        socialKeys={socialKeys}
      />
    </div>
  );
}

export default NavSocialIconButtons;
