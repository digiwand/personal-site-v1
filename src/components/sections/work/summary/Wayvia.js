import SummaryBase from 'components/sections/work/summary/Base';
import PropTypes from 'prop-types';
import {
  IMG_CONFIGS_WAYVIA,
  JOB_META_WAYVIA,
  WORK_CAROUSEL_WAYVIA_OFFSET,
} from 'components/sections/work/shared/constants';

const TECH_KEYS = [
  'ANGULARJS',
  'EXPRESSJS',
  'NODEJS',
  'HIGHCHARTS',
  'HTML5',
  'CSS3',
  'SASS',
  'HANDLEBARS',
  'POSTGRESQL',
  'MONGODB',
  'ASP_NET',
  'CSHARP',
  'REGEX',
  'GOOGLE_WEB_DESIGNER',
  'INTELLI_J',
];

function SummaryWayvia({ onOpenWorkCarousel }) {
  return (
    <SummaryBase
      {...JOB_META_WAYVIA}
      date="Feb 2015 - Jun 2016"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS_WAYVIA}
      onOpenWorkCarousel={onOpenWorkCarousel}
      workCarouselSlideOffset={WORK_CAROUSEL_WAYVIA_OFFSET}
    >
      Another engineer and I pioneered and launched a MEAN-stack analytics application with RESTful APIs 
      and interactive graphs in 4.5 months. I architected the authentication system and login flow with brute-force prevention, 
      and built role-based access control supporting custom roles with granular read/write permissions. 
      I shipped 25+ responsive, cross-browser Where-to-Buy widgets used by global brands including Samsung, Canon, and Mars, 
      and authored the web crawlers behind our data, which parsed store and product info across multiple languages while 
      working around captchas and user-agent limits.
    </SummaryBase>
  );
}

SummaryWayvia.propTypes = {
  onOpenWorkCarousel: PropTypes.func.isRequired,
};

export default SummaryWayvia;
