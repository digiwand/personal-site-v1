/** Image trio / carousel configs for work job sections (`srcName` → `/images/work/{srcName}.webp`). */

export const JOB_META_COPPER = {
  companyName: 'Copper CRM',
  title: 'Senior Software Engineer',
  subtitle: '(Client-Side)',
};

export const JOB_META_PRICESPIDER = {
  companyName: 'PriceSpider',
  title: 'Software Engineer',
  subtitle: '(Full Stack)',
};

export const IMG_CONFIGS_COPPER = [
  {
    ...JOB_META_COPPER,
    alt: 'Copper Companies Page',
    srcName: 'copper-companies-list-preview',
  },
  {
    ...JOB_META_COPPER,
    alt: 'Copper Contact Page',
    srcName: 'copper-contact-preview',
    type: 'jpeg',
  },
  {
    ...JOB_META_COPPER,
    alt: 'Copper AMP Email Gif',
    srcName: 'copper-amp-email-preview',
  },
];

export const IMG_CONFIGS_PRICESPIDER = [
  {
    ...JOB_META_PRICESPIDER,
    alt: 'PriceSpider Mars Where-to-buy',
    srcName: 'pricespider-wtb-mars-preview',
  },
  {
    ...JOB_META_PRICESPIDER,
    alt: 'PriceSpider Iams Where-to-buy',
    srcName: 'pricespider-wtb-iams-preview',
  },
  {
    ...JOB_META_PRICESPIDER,
    alt: 'PriceSpider Hoover & Dell Ads',
    srcName: 'pricespider-ads-preview',
  },
];

/** All work screenshots in gallery order (single carousel instance on the work section). */
export const WORK_IMG_CONFIGS = [...IMG_CONFIGS_COPPER, ...IMG_CONFIGS_PRICESPIDER];

/** Global slide index of the first image in {@link IMG_CONFIGS_COPPER}. */
export const WORK_CAROUSEL_COPPER_OFFSET = 0;

/** Global slide index of the first image in {@link IMG_CONFIGS_PRICESPIDER}. */
export const WORK_CAROUSEL_PRICESPIDER_OFFSET = IMG_CONFIGS_COPPER.length;
