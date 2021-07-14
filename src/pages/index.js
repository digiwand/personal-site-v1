import Layout from 'components/layout';

import HomeSection from 'components/sections/home/Home';
import AboutSection from 'components/sections/about/About';
import ContactSection from 'components/sections/contact/Contact';


/**
 * @todo 
 * - move anchor ids into constant
 */

export default function Home() {
  return (
    <Layout home>
      <HomeSection />
      <AboutSection />
      <ContactSection />

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