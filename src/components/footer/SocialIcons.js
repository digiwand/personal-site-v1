import { IconButton } from 'theme-ui';
import SOCIAL from 'constants/social';

function FooterSocialIcons() {
  const socialIconButtons = Object.keys(SOCIAL).map((key) => {
    const socialConfig = SOCIAL[key];
    return (
      <IconButton
        sx={(theme) => ({
          variant: 'buttons.icon.small',
          path: {
            fill: `${theme.colors.frameText}`,
          },
        })}
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
      }}
    >
      {socialIconButtons}
    </div>
  );
}

export default FooterSocialIcons;
