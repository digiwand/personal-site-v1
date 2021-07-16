import { lighten } from '@theme-ui/color'
import { IconButton } from 'theme-ui';
import styles from 'components/common/IconButtonWrapped.module.scss';

/**
 * @fixme Use if we want to get fancy or delete
 * Wrap theme-ui IconButton to support opacity with color modes
 */
export default function IconButtonWrapped({ children, ...props }) {
  return (
    <IconButton className={styles.IconButton}
      sx={{
        variant: 'buttons.icon.secondary',
        // '&:hover': {
        //   bg: lighten('background', 0.2),
        //   apply remaining hover styles because this will override theme.js settings
        // },
        mt: 3,
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};
