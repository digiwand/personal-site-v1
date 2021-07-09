import Layout from 'components/layout';
import styles from 'styles/index.module.scss';

export default function Home() {
  return (
    <Layout home>
      {/* @todo: breakout into section components */}
      <section id="home" className={styles.section}>
        <div >
          Hello.
        </div>
      </section>
      <section id="about" className={styles.section} style={{ background: 'lightpink' }}>
        This is the about section. 
      </section>
      <section id="contact" className={styles.section} style={{ background: 'lightblue' }}>
        This is the contact section. 
      </section>

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
  )
}