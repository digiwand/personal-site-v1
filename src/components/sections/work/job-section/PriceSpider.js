import JobSection from 'components/sections/work/job-section/JobSection';

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

const IMG_CONFIGS = [
  {
    alt: 'PriceSpider Mars Where-to-buy',
    srcName: 'pricespider-wtb-mars-preview',
  },
  {
    alt: 'PriceSpider Iams Where-to-buy',
    srcName: 'pricespider-wtb-iams-preview',
  },
  {
    alt: 'PriceSpider Hoover & Dell Ads',
    srcName: 'pricespider-ads-preview',
  },
];

function JobSectionPriceSpider() {
  return (
    <JobSection
      companyName="PriceSpider"
      title="Software Engineer"
      subtitle="(Full Stack)"
      date="Feb 2015 - Jun 2016"
      techKeys={TECH_KEYS}
      imgConfigs={IMG_CONFIGS}
    >
      I built the Angular 1.x reporting platform from scratch alongside a fellow server developer and our 
      engineering manager. Using PostgreSQL, I architected the user, roles, and permissions schemas, then 
      implemented dynamic role-based access control enforced through middleware on our Express.js routes. 
      We used Highcharts and Highmaps to visualize impressions and clicks across our Where-to-Buy (WTB) solutions.
      <br />
      <br />
      Another third of my time at PriceSpider was spent building web crawlers in C#, ASP.NET, and regex to
      extract store and product information from retailer sites.
      <br />
      <br />
      I also developed 25+ HTML-embedded WTB widgets deployed across different e-commerce pages.
    </JobSection>
  );
}

export default JobSectionPriceSpider;
