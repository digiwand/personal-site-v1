import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const SOCIAL_KEYS = [
  'github',
  'stackoverflow',
  'jsfiddle',
  'linkedin',
];

function ContactSocialIconButtons() {
  return (
    <div
      sx={{
        display: 'flex',
        maxWidth: '350rem',
        width: '80%',
        flex: '1 0 auto',
        pt: 5,
        pb: 3,
        justifyContent: ['space-between', 'space-between', 'initial'],
        alignSelf: ['center', 'center', 'initial'],
      }}
    >
      <SocialIconButtons
        sx={{
          mr: [0, 0, 4],
          path: {
            fill: (t) => `${t.colors.backgroundContactSubHeader}`,
          },
        }}
        showUsername
        socialKeys={SOCIAL_KEYS}
      />
    </div>
  );
}

export default ContactSocialIconButtons;
