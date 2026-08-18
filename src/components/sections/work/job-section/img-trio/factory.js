import { Image } from 'theme-ui';

/**
 * Renders a responsive picture element for a work screenshot config.
 *
 * @param {object} imgConfig
 * @param {string} imgConfig.srcName
 * @param {string} imgConfig.alt
 * @param {string} [imgConfig.type] — file extension when not webp (default `'png'`)
 * @param {object} [imageProps] — forwarded to theme-ui Image (e.g. loading, decoding, sizes)
 */
export function generateWorkImage(imgConfig, imageProps = {}) {
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
 *
 * @param {Array<object>} imgConfigs
 * @returns {Array<(extraImageProps?: object) => JSX.Element>}
 */
export function createWorkImageFactories(imgConfigs) {
  return imgConfigs.map((config) => (extraImageProps = {}) => generateWorkImage(config, extraImageProps));
}
