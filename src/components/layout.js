import Head from 'next/head'

import Nav from 'components/nav/Nav';
import ThemeSelector from 'components/side-frame/theme-selector/ThemeSelector';

import PROP_TYPE from 'constants/prop-types';

const siteTitle = 'Ariella Vu';

const propTypes = {
  sectionTrackingPixelRefs: PROP_TYPE.REF,
};

function Layout({ children, sectionTrackingPixelRefs }) {

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

      <main sx={{ 
          maxWidth: 'container',
          mx: 'auto',
          px: [4, 6, 6]
        }}
      >
        {children}
      </main>

      <ThemeSelector />
      <Nav sectionTrackingPixelRefs={sectionTrackingPixelRefs}/>
    </div>
  )
}

Layout.propTypes = propTypes;

export default Layout;