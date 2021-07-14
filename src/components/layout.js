import Head from 'next/head'

import Nav from 'components/nav/Nav';

const siteTitle = 'Ariella Vu';

export default function Layout({ children, ...props }) {
  
  return (
    <div>
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

      <main sx={{ px: 6 }}>
        {children}
      </main>

      <Nav />
    </div>
  )
}