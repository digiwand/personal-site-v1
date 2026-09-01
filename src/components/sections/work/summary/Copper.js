import SummaryBase from 'components/sections/work/summary/Base';
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

function SummaryCopper({ onOpenWorkCarousel }) {
  return (
    <SummaryBase
      {...JOB_META_COPPER}
      date="Aug 2016 - Apr 2021"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS_COPPER}
      onOpenWorkCarousel={onOpenWorkCarousel}
      workCarouselSlideOffset={WORK_CAROUSEL_COPPER_OFFSET}
    >
      At Copper CRM, I was the client-side technical lead for an in-house A/B testing tool, 
      AMP emails, the Google Workspace beta add-on launch, an in-app RingCentral VoIP service, 
      extensive refactoring, performance improvements including for infinite-scroll lists, and 
      accessible, responsive UI. 
      <br />
      Beyond features I helped grow the team: I wrote interview questions 
      and ran 15+ interviews, championed best practices, authored and presented 8+ architecture proposals, 
      and partnered with third parties to lend front-end expertise.
    </SummaryBase>
  );
}

SummaryCopper.propTypes = {
  onOpenWorkCarousel: PropTypes.func.isRequired,
};

export default SummaryCopper;
