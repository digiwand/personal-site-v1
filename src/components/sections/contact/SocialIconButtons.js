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
        maxWidth: ['none', '350px', '350px'],
        flex: '1 0 auto',
        pt: 5,
        justifyContent: ['space-between', 'initial', 'initial'],
      }}
    >
      <SocialIconButtons
        sx={{
          mr: [0, 4, 4],
        }}
        showUsername
        socialKeys={SOCIAL_KEYS}
      />
    </div>
  );
}

export default ContactSocialIconButtons;
