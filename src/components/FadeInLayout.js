/**
 * Give some time for app to load its content and scroll to the appropriate hash  by adding a setTimeout and fade-in effect
 */
function FadeInLayout({ children, isLoading }) {
  return (
    <div
      is-loading={String(isLoading)}
      sx={{
        opacity: 0,
        transition: 'opacity 1s',

        '&[is-loading="false"]': {
          opacity: '1',
        },
      }}
    >
      {children}
    </div>
  );
}

export default FadeInLayout;
