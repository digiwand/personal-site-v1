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
function Page() {
  const sectionTrackingPixelRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <Layout sectionTrackingPixelRefs={sectionTrackingPixelRefs}>
      <HomeSection ref={sectionTrackingPixelRefs[0]} />
      <AboutSection ref={sectionTrackingPixelRefs[1]} />
      <TechSection ref={sectionTrackingPixelRefs[3]} />
      <WorkSection ref={sectionTrackingPixelRefs[2]} />
      <ContactSection ref={sectionTrackingPixelRefs[4]} />
    </Layout>
  );
}

export default Page;
