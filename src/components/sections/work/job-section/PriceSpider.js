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
      I started the Angular 1.x reporting platform here from scratch along-side a fellow server developer and
      engineer manager. Using PostgresSQL, I architected the user, roles, and permissions schemas. Then, I
      implemented dynamic roles and permissions and enforced them through middleware on our Express.js routes.
      We used highscharts and highmaps to display the impressions and clicks made on our Where-To-Buy (WTB) solutions.
      <br />
      <br />
      Another third of my time spent at PriceSpider was used to create web crawlers using C#, ASP.NET and Regexes to
      to extract store and product information on seller sites.
      <br />
      <br />
      In addition, I developed over 25+ HTML-embedded, WTB widgets on 25+ different e-commerce webpages.
    </JobSection>
  );
}

export default JobSectionPriceSpider;
