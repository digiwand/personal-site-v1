import type { ReactNode } from 'react';
import IconNightStay from 'components/svg/material-icons/nightsStay';
import IconWbSunny from 'components/svg/material-icons/wbSunny';
import type { ThemeName } from 'styles/theme/colors';
import { THEME_NAMES } from 'styles/theme/colors';

type ThemeMeta = {
  icon: ReactNode;
  displayName: string;
};

const THEME_META: Record<ThemeName, ThemeMeta> = {
  dark: {
    icon: <IconNightStay />,
    displayName: 'dark',
  },
  light: {
    icon: <IconWbSunny />,
    displayName: 'light',
  },
};

export { THEME_NAMES };
export default THEME_META;
