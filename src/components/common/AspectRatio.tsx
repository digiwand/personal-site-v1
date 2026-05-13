import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

type DivProps = ComponentPropsWithoutRef<'div'>;

type Props = Omit<DivProps, 'children' | 'sx'> & {
  children: ReactNode,
  ratio?: string,
  sx?: ThemeUIStyleObject,
};

/**
 * To use AspectRatio, pass an image element as the "children" prop.
 *
 * "aspect-ratio" css is currently not supported by mobile and other browsers, so we will use a known padding hack to
 * to support aspect ratios for responsive images. The keys to this hack are the height and padding-bottom props.
 *
 * Base styles (including `img` / direct-child rules) are merged with `sx` via object spread so nested selectors are
 * not dropped — theme-ui `sx={[a, b]}` can replace nested objects instead of deep-merging them.
 *
 * @example
    <AspectRatio>
      <img src="/example.png" alt="example" />
    </AspectRatio>
 */
function AspectRatio({
  children,
  className = '',
  ratio = '1/1',
  sx: sxProp,
  ...props
}: Props) {
  const baseSx: ThemeUIStyleObject = {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '0',
    overflow: 'hidden',
    '--aspect-ratio': ratio,
    paddingBottom: 'calc(100%/(var(--aspect-ratio)))',
    // Fill box when child is `<picture>` (or other wrapper) before the `<img>`
    '> *': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
    },
    img: {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'top',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: 'rgba(120, 120, 120, 0.8) 1rem 1rem 13rem 0rem',
    },
  };

  const mergedSx: ThemeUIStyleObject = {
    ...baseSx,
    ...(sxProp && typeof sxProp === 'object' && !Array.isArray(sxProp) ? sxProp : {}),
  };

  return (
    <div
      className={className}
      {...props}
      sx={mergedSx as never}
    >
      {children}
    </div>
  );
}

export default AspectRatio;
