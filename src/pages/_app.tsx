import { AppProps } from 'next/app';
import { useState } from 'react';

import 'styles/global.scss';
import 'styles/globals.css';

import FadeInLayout from 'components/FadeInLayout';
import Loader from 'components/Loader';
import { ThemeProvider } from 'theme/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <Loader finishLoading={() => setIsLoading(false)} />
      <FadeInLayout isLoading={isLoading}>
        <Component {...pageProps} />
      </FadeInLayout>
    </ThemeProvider>
  );
}
