import JobSection from 'components/sections/work/section/JobSection';
import PropTypes from 'prop-types';
import {
  IMG_CONFIGS_PRICESPIDER,
  JOB_META_PRICESPIDER,
  WORK_CAROUSEL_PRICESPIDER_OFFSET,
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

function JobSectionPriceSpider({ onOpenWorkCarousel }) {
  return (
    <JobSection
      {...JOB_META_PRICESPIDER}
      date="Feb 2015 - Jun 2016"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS_PRICESPIDER}
      onOpenWorkCarousel={onOpenWorkCarousel}
      workCarouselSlideOffset={WORK_CAROUSEL_PRICESPIDER_OFFSET}
    >
      I built the Angular 1.x reporting platform from scratch alongside a fellow server developer and our 
      engineering manager. Using PostgreSQL, I architected the user, roles, and permissions schemas, then 
      implemented dynamic role-based access control enforced through middleware on our Express.js routes. 
      For dynamic data like product catalogs, I used MongoDB. We used Highcharts and Highmaps to visualize impressions 
      and clicks across our Where-to-Buy (WTB) solutions.
      <br />
      <br />
      Another third of my time at PriceSpider was spent building web crawlers in C#, ASP.NET, and regex to
      extract store and product information from retailer sites.
      <br />
      <br />
      Among other contributions, I developed 25+ HTML-embedded WTB widgets deployed across different e-commerce pages, 
      led Angular Best Practices Workshops, co-pioneered and launched WTB animated ads, 
      and actively optimized developer processes.
    </JobSection>
  );
}

JobSectionPriceSpider.propTypes = {
  onOpenWorkCarousel: PropTypes.func.isRequired,
};

export default JobSectionPriceSpider;
