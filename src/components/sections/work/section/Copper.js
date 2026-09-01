import JobSection from 'components/sections/work/section/JobSection';
import PropTypes from 'prop-types';
import {
  IMG_CONFIGS_COPPER,
  JOB_META_COPPER,
  WORK_CAROUSEL_COPPER_OFFSET,
} from 'components/sections/work/shared/constants';

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

function JobSectionCopper({ onOpenWorkCarousel }) {
  return (
    <JobSection
      {...JOB_META_COPPER}
      date="Aug 2016 - Apr 2021"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS_COPPER}
      onOpenWorkCarousel={onOpenWorkCarousel}
      workCarouselSlideOffset={WORK_CAROUSEL_COPPER_OFFSET}
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

JobSectionCopper.propTypes = {
  onOpenWorkCarousel: PropTypes.func.isRequired,
};

export default JobSectionCopper;
