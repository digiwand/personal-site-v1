import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import { cn } from 'lib/cn';

type DivProps = ComponentPropsWithoutRef<'div'>;

type Props = Omit<DivProps, 'children'> & {
  children: ReactNode,
  ratio?: string,
};

/** TODO deprecate */
function AspectRatio({
  children,
  className = '',
  ratio = '1/1',
  style,
  ...props
}: Props) {
  return (
    <div
      className={cn('aspect-ratio-box', className)}
      style={{ '--aspect-ratio': ratio, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export default AspectRatio;
