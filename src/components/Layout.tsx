import Head from 'next/head';
import { ReactNode, MutableRefObject, useRef } from 'react';

import Footer from 'components/footer/Footer';
import Nav from 'components/nav/Nav';
import { useTheme } from 'theme/ThemeProvider';

const siteTitle = 'Ariella Vu | Software Engineer | Personal Website';

type Props = {
  children: ReactNode,
  sectionTrackingPixelRefs?: MutableRefObject<HTMLDivElement>[],
};

function Layout({ children, sectionTrackingPixelRefs = null } : Props) {
  const pageTopTrackingPixelRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();

  const pageTopTrackingPixel = (
    <div
      className="absolute h-1 w-1 top-[80rem]"
      ref={pageTopTrackingPixelRef}
    />
  );

  return (
    <div
      className="u-scrollbar bg-page absolute top-0 left-0 h-full w-full min-w-[320px]"
    >
      <Head>
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ariella.dev" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />

        <meta
          name="description"
          content={'Ariella is a programmer developing secure, privacy-preserving experiences in Web 3.0. '
          + 'She is currently a Senior Software Engineer II at Consensys, MetaMask.'}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://ariella.dev" />

        <meta name="og:image" content="https://ariella.dev/images/ariella-vu-website-preview.png" />
        <meta name="og:image:alt" content="Preview of Portfolio" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <meta name="theme-color" content={colors.text} />
      </Head>

      <main className="relative">
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

export default Layout;
