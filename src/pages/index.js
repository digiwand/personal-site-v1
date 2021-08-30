import { useRef } from 'react';

import Layout from '../components/Layout';
import HomeSection from '../components/sections/home/Home';
import AboutSection from '../components/sections/about/About';
import TechSection from '../components/sections/tech/Tech';
import WorkSection from '../components/sections/work/Work';
import ContactSection from '../components/sections/contact/Contact';

/**
 * @todo
 * - move anchor ids into constant
 */
function Home() {
  // @todo cleanup. Create ref for each section. Make dynamic based on # of sections
  const sectionTrackingPixelRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  return (
    <Layout sectionTrackingPixelRefs={sectionTrackingPixelRefs}>
      <HomeSection ref={sectionTrackingPixelRefs[0]} />
      <AboutSection ref={sectionTrackingPixelRefs[1]} />
      <WorkSection ref={sectionTrackingPixelRefs[2]} />
      <TechSection ref={sectionTrackingPixelRefs[3]} />
      <ContactSection ref={sectionTrackingPixelRefs[4]} />
    </Layout>
  );
}

export default Home;
