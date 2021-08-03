import { useRef } from 'react';

import Layout from 'components/layout';
import HomeSection from 'components/sections/home/Home';
import AboutSection from 'components/sections/about/About';
import ContactSection from 'components/sections/contact/Contact';

/**
 * @todo 
 * - move anchor ids into constant
 */
function Home() {
  // @todo cleanup. Create ref for each section. Make dynamic based on # of sections
  const sectionTrackingPixelRefs = [useRef(), useRef(), useRef()];

  return (
    <Layout sectionTrackingPixelRefs={sectionTrackingPixelRefs}>
      <HomeSection ref={sectionTrackingPixelRefs[0]} />
      <AboutSection ref={sectionTrackingPixelRefs[1]} />
      <ContactSection ref={sectionTrackingPixelRefs[2]} />

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