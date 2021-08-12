import { IconButton } from 'theme-ui';
import SOCIAL from 'constants/social';

const socialKeys = ['stackoverflow', 'github', 'linkedin'];

function NavSocialIcons() {
  const socialIconButtons = socialKeys.map((key) => {
    const socialConfig = SOCIAL[key];
    return (
      <IconButton
        sx={{
          variant: 'buttons.icon.small',
        }}
        key={key}
      >
        <a href={socialConfig.url} target="_blank" rel="noopener noreferrer">
          {socialConfig.iconSVG}
        </a>
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
