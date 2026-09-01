/** Image trio / carousel configs for work job sections (`srcName` → `/images/work/{srcName}.webp`). */

type JobMeta = {
  companyName: string;
  title: string;
  subtitle: string;
};

type ImageType = 'webp' | 'jpeg' | 'png' | 'gif';

type WorkImageConfig = JobMeta & {
  alt: string;
  srcName: string;
  type?: ImageType;
};

export const JOB_META_COPPER: JobMeta = {
  companyName: 'Copper CRM',
  title: 'Senior Software Engineer',
  subtitle: 'Front-end',
};

export const JOB_META_WAYVIA: JobMeta = {
  companyName: 'Wayvia',
  title: 'Software Engineer',
  subtitle: 'Full Stack',
};

export const IMG_CONFIGS_COPPER: WorkImageConfig[] = [
  {
    ...JOB_META_COPPER,
    alt: 'Companies page',
    srcName: 'copper-companies-list-preview',
  },
  {
    ...JOB_META_COPPER,
    alt: 'Contact page',
    srcName: 'copper-contact-preview',
    type: 'jpeg',
  },
  {
    ...JOB_META_COPPER,
    alt: 'AMP Email which Includes RESTful data',
    srcName: 'copper-amp-email-preview',
  },
];

export const IMG_CONFIGS_WAYVIA: WorkImageConfig[] = [
  {
    ...JOB_META_WAYVIA,
    alt: 'Mars Snacking - Where to Buy Embedded HTML Widget',
    srcName: 'wayvia-wtb-mars-preview',
  },
  {
    ...JOB_META_WAYVIA,
    alt: 'Iams - Where to Buy Embedded HTML Modal Widget',
    srcName: 'wayvia-wtb-iams-preview',
  },
  {
    ...JOB_META_WAYVIA,
    alt: 'Dell, Hoover - Where to Buy Animated Ads',
    srcName: 'wayvia-ads-preview',
  },
];

/** All work screenshots in gallery order (single carousel instance on the work section). */
export const WORK_IMG_CONFIGS: WorkImageConfig[] = [
  ...IMG_CONFIGS_COPPER,
  ...IMG_CONFIGS_WAYVIA,
];

/** Global slide index of the first image in {@link IMG_CONFIGS_COPPER}. */
export const WORK_CAROUSEL_COPPER_OFFSET = 0;

/** Global slide index of the first image in {@link IMG_CONFIGS_WAYVIA}. */
export const WORK_CAROUSEL_WAYVIA_OFFSET = IMG_CONFIGS_COPPER.length;
