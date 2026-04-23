import { useRef } from 'react';

import Layout from 'components/Layout';
import HomeSection from 'components/sections/home/Home';
import AboutSection from 'components/sections/about/About';
import TechSection from 'components/sections/tech/Tech';
import WorkSection from 'components/sections/work/Work';
import ContactSection from 'components/sections/contact/Contact';

/**
 * If the order of the sections change, be sure to update the order in
 * {@link src/constants/section.js}
 */
function Home() {
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const techSectionRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const sectionTrackingPixelRefs = [
    homeSectionRef,
    aboutSectionRef,
    techSectionRef,
    workSectionRef,
    contactSectionRef,
  ];

  return (
    <Layout sectionTrackingPixelRefs={sectionTrackingPixelRefs}>
      <HomeSection ref={homeSectionRef} />
      <AboutSection ref={aboutSectionRef} />
      <TechSection ref={techSectionRef} />
      <WorkSection ref={workSectionRef} />
      <ContactSection ref={contactSectionRef} />
    </Layout>
  );
}

export default Home;
