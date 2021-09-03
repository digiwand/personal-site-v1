import CopperImgs from 'components/sections/work/job-section/CopperImgs';
import JobSection from 'components/sections/work/job-section/JobSection';

function JobSectionCopper() {
  return (
    <JobSection
      companyName="Copper CRM"
      title="Senior Software Engineer"
      subtitle="(Client-Side)"
      date="August 2016 - April 2021"
      descriptionSide="right"
      img={<CopperImgs />}
    >
      At Copper, I led numerous front-end projects for the CRM platform. These projects include, but are not limited to,
      building an in-house A/B testing tool, AMP emails, G-Suite add-on, Pricing & Plan restructure, along with various
      performance improvements.
    </JobSection>
  );
}

export default JobSectionCopper;
