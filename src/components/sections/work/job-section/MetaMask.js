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
      date="Jan 2022 - Current"
      techKeys={TECH_KEYS}
    >
      Currently, I&apos;m working on transaction security and UI/UX in the MetaMask extension. I&apos;ve been a core developer 
      for our Chromium Manifest V3 support, Sign-in with Ethereum (EIP-4361) integration and refactor work.
      <br />
      <br />
      My journey here in the Ethereum ecosystem has involved listening and responding to user feedback, 
      troubleshooting dapp developer issues, extensive code reviews, hosting workshops, assisting at hackathons,
      collaborating with other teams in the space, and more.
    </JobSection>
  );
}

export default JobSectionMetaMask;
