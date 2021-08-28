import { useEffect, useState } from 'react';

const ARBITRARY_DELAY = 650;

/**
 * Give some time for app to load its content and scroll to the appropriate hash  by adding a setTimeout and fade-in effect
 */
function FadeInLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), ARBITRARY_DELAY);
    return () => clearTimeout(timeout);
  }, [isLoading]);

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
