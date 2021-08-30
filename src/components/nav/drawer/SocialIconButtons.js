import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const socialKeys = ['stackoverflow', 'github', 'jsfiddle', 'linkedin'];

function NavDrawerSocialIcons() {
  return (
    <>
      <SocialIconButtons
        sx={(t) => ({
          position: 'relative',
          height: '100%',
          width: '25%',
          flex: '1 0 auto',

          '&:hover ': {
            background: t.colors.frameBorder,
            path: {
              fill: t.colors.frameHoverText,
            },
          },

          '&:not(:last-of-type):after': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '1rem',
            right: '0',
            top: '0',
            background: t.colors.frameBorder,
          },
        })}
        socialKeys={socialKeys}
      />
    </>
  );
}

export default NavDrawerSocialIcons;
