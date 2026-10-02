import type { ReactNode } from 'react';
import {
  IconCodePen,
  IconDiscord,
  IconFacebook,
  IconGitHub,
  IconInstagram,
  IconJSFiddle,
  IconLinkedIn,
  IconMailOutline,
  IconNomadlist,
  IconReplit,
  IconStackOverflow,
  IconTwitter,
} from 'components/svg/social/index';

export const CONTACT_EMAIL = 'ariellavu@gmail.com';

type SocialConfig = {
  iconSVG: ReactNode;
  url: string;
};

const SOCIAL = {
  codepen: {
    iconSVG: <IconCodePen />,
    url: 'https://codepen.io/ariellav',
  },
  discord: {
    iconSVG: <IconDiscord />,
    url: 'https://discord.com/users/a13u#7391',
  },
  email: {
    iconSVG: <IconMailOutline />,
    url: `mailto:${CONTACT_EMAIL}?subject=Greetings%21+Let%27s+connect+-`,
  },
  facebook: {
    iconSVG: <IconFacebook />,
    url: 'https://www.facebook.com/ariellanvu',
  },
  github: {
    iconSVG: <IconGitHub />,
    url: 'https://github.com/digiwand',
  },
  instagram: {
    iconSVG: <IconInstagram />,
    url: 'https://www.instagram.com/digi.wand',
  },
  jsfiddle: {
    iconSVG: <IconJSFiddle />,
    url: 'https://jsfiddle.net/user/ariella',
  },
  linkedin: {
    iconSVG: <IconLinkedIn />,
    url: 'https://www.linkedin.com/in/ariellavu/',
  },
  nomadlist: {
    iconSVG: <IconNomadlist />,
    url: 'https://nomadlist.com/@ariella',
  },
  replit: {
    iconSVG: <IconReplit />,
    url: 'https://replit.com/@digiwand',
  },
  stackoverflow: {
    iconSVG: <IconStackOverflow />,
    url: 'https://stackoverflow.com/users/4053142/ariella',
  },
  twitter: {
    iconSVG: <IconTwitter />,
    url: 'https://twitter.com/digiwand_',
  },
} satisfies Record<string, SocialConfig>;

export type SocialKey = keyof typeof SOCIAL;

export const PRIMARY_SOCIAL_KEYS = [
  'stackoverflow',
  'github',
  'linkedin',
] as const satisfies readonly SocialKey[];

export default SOCIAL;
