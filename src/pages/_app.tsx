import { AppProps } from 'next/app';
import { useCallback, useState } from 'react';
import 'styles/globals.css';

import FadeInLayout from 'components/FadeInLayout';
import Loader from 'components/Loader';
import { ThemeProvider } from 'theme/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <ThemeProvider>
      <Loader finishLoading={finishLoading} />
      <FadeInLayout isLoading={isLoading}>
        <Component {...pageProps} />
      </FadeInLayout>
    </ThemeProvider>
  );
}
