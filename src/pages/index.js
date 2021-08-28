import { useRef } from 'react';

import Layout from 'components/Layout';
import HomeSection from 'components/sections/home/Home';
import AboutSection from 'components/sections/about/About';
import TechSection from 'components/sections/tech/Tech';
import WorkSection from 'components/sections/work/Work';
import ContactSection from 'components/sections/contact/Contact';

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

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

export default Home;
