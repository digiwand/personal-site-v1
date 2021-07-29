import Head from 'next/head'

import Nav from 'components/nav/Nav';
import ThemeSelector from 'components/side-frame/theme-selector/ThemeSelector';

const siteTitle = 'Ariella Vu';

export default function Layout({ children }) {

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

      <main sx={{ px: [4, 5, 7] }}>
        {children}
      </main>

      <ThemeSelector />
      <Nav />
    </div>
  )
}