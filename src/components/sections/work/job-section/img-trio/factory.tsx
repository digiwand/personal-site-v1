import { Image } from 'theme-ui';
import React from 'react';

interface ImgConfig {
  srcName: string;
  alt: string;
  type?: string;
}

interface ImageProps {
  [key: string]: any;
}

/**
 * Renders a responsive picture element for a work screenshot config.
 */
export function generateWorkImage(
  imgConfig: ImgConfig,
  imageProps: ImageProps = {}
): React.ReactElement {
  const type = imgConfig.type || 'png';

  return (
    <picture>
      <source
        srcSet={`/images/work/${imgConfig.srcName}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/images/work/${imgConfig.srcName}.${type}`}
        type={`image/${type}`}
      />
      <Image
        alt={imgConfig.alt}
        src={`/images/work/${imgConfig.srcName}.${type}`}
        decoding="async"
        {...imageProps}
      />
    </picture>
  );
}

/**
 * One factory per slide so each `factories[i]()` returns a new element tree (trio + modal cannot share one node).
 */
export function createWorkImageFactories(
  imgConfigs: ImgConfig[]
): Array<(extraImageProps?: ImageProps) => React.ReactElement> {
  return imgConfigs.map(
    (config) => (extraImageProps = {}) => generateWorkImage(config, extraImageProps)
  );
}
