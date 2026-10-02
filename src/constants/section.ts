export const SECTION_ID = {
  HOME: 'home',
  ABOUT: 'about',
  TECH: 'tech',
  WORK: 'work',
  CONTACT: 'contact',
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

/** Nav order. Keep this aligned with the sections rendered on the home page. */
export const SECTION_IDS = [
  SECTION_ID.HOME,
  SECTION_ID.ABOUT,
  SECTION_ID.TECH,
  SECTION_ID.WORK,
  SECTION_ID.CONTACT,
] as const satisfies readonly SectionId[];

export const SECTION_DISPLAY_NAME: Record<SectionId, string> = {
  [SECTION_ID.HOME]: 'Home',
  [SECTION_ID.ABOUT]: 'About',
  [SECTION_ID.TECH]: 'Tech',
  [SECTION_ID.WORK]: 'Work',
  [SECTION_ID.CONTACT]: 'Contact',
};
