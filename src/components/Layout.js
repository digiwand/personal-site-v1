import { useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { InitializeColorMode, useThemeUI } from 'theme-ui';

import Footer from 'components/footer/Footer';
import Nav from 'components/nav/Nav';

import PROP_TYPE from 'constants/prop-types';

const siteTitle = 'Ariella Vu';

const propTypes = {
  sectionTrackingPixelRefs: PropTypes.arrayOf(PROP_TYPE.REF),
};

const defaultProps = {
  sectionTrackingPixelRefs: null,
};

function Layout({ children, sectionTrackingPixelRefs }) {
  const pageTopTrackingPixelRef = useRef();
  const { theme: { rawColors } } = useThemeUI();

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
    <div
      sx={{
        variant: 'scrollbar',
        height: '100vh',
      }}
    >
      {/* Note: We can add Head to any React component */}
      <Head>
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Ariella Vu's personal website and resume"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Updates toolbar color for various browsers including Safari and Android Chrome */}
        <meta name="theme-color" content={rawColors.text} />
      </Head>

      {/*
        @todo observe if this works. This is noted to fix an issue where colors flutter in
        Gatsby. Check to see if it fixes a similar issue here on Next.js
        */}
      <InitializeColorMode />

      <main sx={{
        position: 'relative',
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
Layout.defaultProps = defaultProps;

export default Layout;
