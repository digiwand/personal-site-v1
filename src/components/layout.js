import { useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import { InitializeColorMode } from 'theme-ui';

import Nav from 'components/nav/Nav';
import Footer from 'components/footer/Footer';

import PROP_TYPE from 'constants/prop-types';

const siteTitle = 'Ariella Vu';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.arrayOf(PROP_TYPE.REF).isRequired,
};

function Layout({ children, sectionTrackingPixelRefs }) {
  const pageTopTrackingPixelRef = useRef();

  const pageTopTrackingPixel = (
    <div
      sx={{
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
      {/* Note: next/script cannot be placed in next/head */}
      <Script src="/polyfills/pathseg.js" strategy="beforeInteractive" />

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

      {/*
        @todo observe if this works. This is noted to fix an issue where colors flutter in
        Gatsby. Check to see if it fixes a similar issue here on Next.js
        */}
      <InitializeColorMode />

      <main sx={{
        position: 'relative',
        maxWidth: 'container',
        mx: 'auto',
      }}
      >
        {pageTopTrackingPixel}
        {children}
      </main>

      <Footer />
      <Nav
        sectionTrackingPixelRefs={sectionTrackingPixelRefs}
        pageTopTrackingPixelRef={pageTopTrackingPixelRef}
      />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
