import SummaryBase from 'components/sections/work/summary/Base';

const TECH_KEYS = [
  'REACTJS',
  'NODEJS',
  'ETHEREUM',
  'EIP',
  'JEST',
  'STORYBOOK',
  'CHROME_EXT',
  'SENTRY',
  'JAVASCRIPT',
  'HTML5',
  'CSS3',
  'GIT',
];

function SummaryMetaMask() {
  return (
    <SummaryBase
      companyName="MetaMask"
      title="Senior Software Engineer II"
      subtitle="Full Stack"
      date="Jan 2022 - Sept 2025"
      techKeys={TECH_KEYS}
    >
      As a core developer on the open-source wallet serving 30M+ monthly active users, I 
      owned high-stakes security and architecture work on the extension and mobile application. 
      As a security liaison I led investigations into high-impact issues: XSS, cross-domain phishing, 
      Unicode-based data obfuscation, and JavaScript supply-chain vulnerabilities. I shipped safeguards to protect users 
      from unauthorized transfers, fixed long-standing defects including a 7-year precision 
      bug impacting financial accuracy, contributed to Ethereum Improvement Proposals, 
      hosted workshops, and mentored at hackathons. 
    </SummaryBase>
  );
}

export default SummaryMetaMask;
