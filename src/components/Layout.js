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

function LinkPreloadFonts() {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/BarlowCondensed-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/BarlowCondensed-Thin.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/MarckScript-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Black.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Light.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Medium.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Thin.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Black.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Light.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Medium.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rubik/static/Rubik-Thin.ttf"
        as="font"
        crossOrigin=""
      />
    </>
  );
}

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
        width: '100%',
        minWidth: '320px',
        transition: 'background 3s, background-image 3s',
        background: (t) => t.colors.backgroundMain,
        // unfortunately, background flickers if we use 'local' here
        backgroundAttachment: 'fixed',

        /**
         * Fixes issue where scrollbar was not clickable or draggable. This element has a height of '100vh'
         * which is believed to fit inside it's parent container without the need of a scrollbar. To fix this,
         * we use position: 'absolute'.
         */
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      <Head>
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
        <LinkPreloadFonts />

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

      <main sx={{ position: 'relative' }}>
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
