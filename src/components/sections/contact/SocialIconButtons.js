import SocialIconButtons from 'components/social-icons/SocialIconButtons';

const SOCIAL_KEYS = [
  'stackoverflow',
  'github',
  /* 'twitter', */
  'linkedin',
];

function ContactSocialIconButtons() {
  return (
    <div
        className="flex max-w-[350rem] flex-[1_0_auto] pt-40 pb-72 land:pt-64 land:pb-48
        m-auto justify-between self-center land:self-auto"
    >
      <SocialIconButtons
        className="contact-social h-[48rem] w-[48rem] z-1"
        socialKeys={SOCIAL_KEYS}
      />
    </div>
  );
}

export default ContactSocialIconButtons;
