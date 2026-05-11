import JobSection from 'components/sections/work/job-section/JobSection';

const TECH_KEYS = [
  'ETHEREUM',
  'EIP',
  'REACTJS',
  'NODEJS',
  'JEST',
  'STORYBOOK',
  'CHROME_EXT',
  'SENTRY',
  'JAVASCRIPT',
  'HTML5',
  'CSS3',
  'GIT',
];

function JobSectionMetaMask() {
  return (
    <JobSection
      companyName="MetaMask"
      title="Senior Software Engineer ||"
      subtitle="(Full Stack)"
      date="Jan 2022 - Sept 2025"
      techKeys={TECH_KEYS}
    >
      As a core developer on MetaMask's extension and mobile applications, I tackled a wide range of complex projects, 
      from restructuring Node.js multiplex streams for the Chromium Manifest V3 migration, to leading the 
      Sign-in with Ethereum (EIP-4361) integration and dissecting the nuances of EIP signatures and transactions. 
      I also deployed safeguards that protected 30+ million user accounts from phishing attacks and pioneered fixes 
      for recurring issues, including defects that had been patched over for 7+ years.
      <br />
      <br />
      Beyond code, my journey in the Ethereum ecosystem has involved listening and responding to user feedback, 
      troubleshooting issues for dApp developers, hosting workshops, mentoring at hackathons, connecting the company with
      25+ partner opportunities (10+ resulting in active partnerships), and collaborating with other organizations in the space.
    </JobSection>
  );
}

export default JobSectionMetaMask;
