type Options = {
  color: string,
  delay?: number,
  duration?: number,
  stagger?: number,
};

/**
 * Line-draw + fill for SVG letter paths. Replaces the old anime.js home signature.
 */
export function drawSvgPaths(root: Element | null, {
  color,
  delay = 980,
  duration = 800,
  stagger = 52,
}: Options) {
  if (!root) {
    return () => {};
  }

  const animations: Animation[] = [];

  root.querySelectorAll('path').forEach((path, index) => {
    const length = path.getTotalLength();

    path.style.stroke = color;
    path.style.strokeWidth = '1';
    path.style.fill = 'transparent';
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    animations.push(path.animate(
      [
        { strokeDashoffset: length, fill: 'transparent' },
        { strokeDashoffset: 0, fill: color },
      ],
      {
        delay: delay + (index * stagger),
        duration,
        easing: 'ease-in-out',
        fill: 'forwards',
      },
    ));
  });

  return () => {
    animations.forEach((animation) => animation.cancel());
  };
}
