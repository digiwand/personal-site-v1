/**
 * Give some time for app to load its content and scroll to the appropriate hash  by adding a setTimeout and fade-in effect
 */
function FadeInLayout({ children, isLoading }) {
  return (
    <div
      data-loading={String(isLoading)}
      className="opacity-0 transition-opacity duration-1000 data-[loading=false]:opacity-100"
    >
      {children}
    </div>
  );
}

export default FadeInLayout;
