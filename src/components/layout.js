import Head from 'next/head'
import Nav from 'components/nav/Nav';
import styles from 'components/layout.module.scss';

export const siteTitle = 'Ariella Vu';

export default function Layout({ children, home }) {
  
  return (
    <div className={styles.container}>
      {/* Note: We can add Head to any React component */}
      <Head>
        <title>{siteTitle}</title>

        <link rel="icon" href="/demofavicon.ico" />
        
        <meta
          name="description"
          content="Ariella Vu's personal website and resume"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <Nav home />
    </div>
  )
}