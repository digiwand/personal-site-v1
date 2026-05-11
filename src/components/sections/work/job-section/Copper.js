import JobSection from 'components/sections/work/job-section/JobSection';

const TECH_KEYS = [
  'EMBERJS',
  'AMP_EMAIL',
  'GOOGLE_ADD_ON',
  'CHROME_EXT',
  'JAVASCRIPT',
  'HTML5',
  'CSS3',
  'CHAI',
  'MOCHA',
  'AB_TESTING',
  'HEAP',
  'PENDO',
  'JIRA',
  'GIT',
  'MAC_OS',
  'DOCUMENTATION',
];

const IMG_CONFIGS = [
  {
    alt: 'Copper Companies Page',
    srcName: 'copper-companies-list-preview',
  },
  {
    alt: 'Copper Contact Page',
    srcName: 'copper-contact-preview',
    type: 'jpeg',
  },
  {
    alt: 'Copper AMP Email Gif',
    srcName: 'copper-amp-email-preview',
  },
];

function JobSectionCopper() {
  return (
    <JobSection
      companyName="Copper CRM"
      title="Senior Software Engineer"
      subtitle="(Client-Side)"
      date="Aug 2016 - Apr 2021"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS}
    >
      At Copper, I led numerous front-end projects for the CRM platform, including an in-house A/B testing tool, 
      AMP emails, a Google Workspace add-on, a dynamic pricing and plan restructure, advanced list filtering, 
      VoIP support, extensive refactoring, and various performance improvements.
      <br />
      <br />
      Beyond feature work, I contributed to hiring by creating interview questions and conducting 15+ interviews. 
      I also advocated for best practices, crafted and presented 8+ large architecture proposals, 
      and frequently collaborated with third parties to lend my expertise.
    </JobSection>
  );
}

export default JobSectionCopper;
