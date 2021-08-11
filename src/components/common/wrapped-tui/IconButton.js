// import { lighten } from '@theme-ui/color'
import { IconButton } from 'theme-ui';

/**
 * @fixme Use if we want to get fancy or delete
 * Wrap theme-ui IconButton to support opacity with color modes
 */
function WrappedIconButton({ children }) {
  return (
    <IconButton
      sx={{
        variant: 'buttons.icon.secondary',
        // '&:hover': {
        //   bg: lighten('background', 0.2),
        //   apply remaining hover styles because this will override theme.js settings
        // },
        mt: 3,
      }}
    >
      {children}
    </IconButton>
  );
}

export default WrappedIconButton;
