import { useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import Nav from 'components/nav/Nav';
import ThemeSelector from 'components/side-frame/theme-selector/ThemeSelector';

import PROP_TYPE from 'constants/prop-types';

const siteTitle = 'Ariella Vu';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.arrayOf(PROP_TYPE.REF),
};

function Layout({ children, sectionTrackingPixelRefs }) {
  const pageTopTrackingPixelRef = useRef();

  const pageTopTrackingPixel = (
    <div sx={{ 
        position: 'absolute',
        height: '1px', 
        width: '1px', 
        top: '80px',
      }}
      ref={pageTopTrackingPixelRef}
    />
  );

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

        {/* @todo TEMP install as vector */}
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>

      </Head>

      <main sx={{ 
          position: 'relative',
          maxWidth: 'container',
          mx: 'auto',
        }}
      >
        {pageTopTrackingPixel}
        {children}
      </main>

      <ThemeSelector />
      <Nav 
        sectionTrackingPixelRefs={sectionTrackingPixelRefs}
        pageTopTrackingPixelRef={pageTopTrackingPixelRef}
      />
    </div>
  )
}

Layout.propTypes = propTypes;

export default Layout;