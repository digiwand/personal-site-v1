import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isLoading: boolean;
}

/** Holds content invisible until the loader finishes, then fades it in. */
function FadeInLayout({ children, isLoading }: Props) {
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
