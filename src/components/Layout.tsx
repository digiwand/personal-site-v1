import Head from 'next/head';
import { ReactNode, MutableRefObject, useRef } from 'react';
import { InitializeColorMode, get, useThemeUI } from 'theme-ui';

import Footer from 'components/footer/Footer';
import Nav from 'components/nav/Nav';

const siteTitle = 'Ariella Vu | Software Engineer | Personal Website';

type Props = {
  children: ReactNode,
  sectionTrackingPixelRefs?: MutableRefObject<HTMLDivElement>[],
};

const defaultProps = {
  sectionTrackingPixelRefs: null,
};

function Layout({ children, sectionTrackingPixelRefs } : Props) {
  const pageTopTrackingPixelRef = useRef<HTMLDivElement>();
  const { theme: { rawColors } } = useThemeUI();

  const pageTopTrackingPixel = (
    <div
      sx={{
        position: 'absolute',
        height: '1rem',
        width: '1rem',
        top: '80rem',
      }}
      ref={pageTopTrackingPixelRef}
    />
  );

  return (
    <div
      className="u-scrollbar"
      sx={{
        height: '100%',
        width: '100%',
        minWidth: '320px',
        transition: 'background 3s, background-image 3s',
        background: (t) => [t.colors.backgroundMainMobile, t.colors.backgroundMainMobile, t.colors.backgroundMain],
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
        <link rel="canonical" href="https://ariella.dev" />

        {/* <LinkPreloadFonts /> */}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />

        <meta
          name="description"
          content={'Ariella is a programmer creating diversity, inclusivity, and opportunities in Web 3.0. She is a senior '
          + 'software engineer at ConsenSys, MetaMask.'}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://ariella.dev" />

        <meta name="og:image" content="https://ariella.dev/images/ariella-vu-website-preview.png" />
        <meta name="og:image:alt" content="Preview of Portfolio" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@digiwand_" />
        <meta name="twitter:site" content="@digiwand_" />
        <meta name="twitter:title" content="Ariella Vu | Personal Website" />
        <meta name="twitter:image" content="https://ariella.dev/images/ariella-vu-website-preview.png" />

        {/* Updates toolbar color for various browsers including Safari and Android Chrome */}
        <meta name="theme-color" content={get(rawColors, 'text')} />
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

Layout.defaultProps = defaultProps;

export default Layout;
