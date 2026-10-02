import { WorkImageConfig } from 'components/sections/work/shared/constants';

/** WebP and fallback URLs for a work screenshot. */
export function workImageSrc(config: WorkImageConfig) {
  const imgType = config.type || 'png';

  return {
    webp: `/images/work/${config.srcName}.webp`,
    fallback: `/images/work/${config.srcName}.${imgType}`,
    mime: `image/${imgType}`,
  };
}
