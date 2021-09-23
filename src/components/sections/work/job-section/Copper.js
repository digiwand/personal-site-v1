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
    src: 'images/work/copper-companies-list.png',
  },
  {
    alt: 'Copper Contact Page',
    src: 'images/work/copper-contact.jpeg',
  },
  {
    alt: 'Copper AMP Email Gif',
    src: 'images/work/copper-amp-email.png',
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
      At Copper, I led numerous front-end projects for the CRM platform. These projects include, but are not limited to,
      building an in-house A/B testing tool, AMP emails, G-Suite add-on, Pricing & Plan restructure, along with various
      performance improvements.
    </JobSection>
  );
}

export default JobSectionCopper;
