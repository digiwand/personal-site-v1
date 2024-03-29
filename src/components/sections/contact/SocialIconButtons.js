import { getColor } from '@theme-ui/color';
import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const SOCIAL_KEYS = [
  'stackoverflow',
  'github',
  'twitter',
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
        pb: [3, 3, 4],
        mx: ['auto', 'auto', 'initial'],
        justifyContent: ['space-between', 'space-between', 'initial'],
        alignSelf: ['center', 'center', 'initial'],
      }}
    >
      <SocialIconButtons
        sx={{
          height: '48rem',
          width: '48rem',
          mr: [0, 0, 4],
          zIndex: '1',

          '&:hover': {
            'a > svg': {
              transform: 'rotate(10deg)',
            },
          },

          path: {
            fill: (t) => `${getColor(t, 'contactIcon')}`,
          },
        }}
        showUsername
        socialKeys={SOCIAL_KEYS}
      />
    </div>
  );
}

export default ContactSocialIconButtons;
