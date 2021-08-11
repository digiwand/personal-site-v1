import { IconButton } from 'theme-ui';
import SOCIAL from 'constants/social';

const socialKeys = ['stackoverflow', 'github', 'linkedin'];

function NavSocialIcons() {
  function openSocialInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const socialIconButtons = socialKeys.map((key) => {
    const socialConfig = SOCIAL[key];
    return (
      <IconButton
        sx={{
          variant: 'buttons.icon.small',
        }}
        key={key}
        onClick={() => { openSocialInNewTab(socialConfig.url); }}
      >
        {socialConfig.iconSVG}
      </IconButton>
    );
  });

  return (
    <div
      sx={{
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        pl: 2,
      }}
    >
      {socialIconButtons}
    </div>
  );
}

export default NavSocialIcons;
