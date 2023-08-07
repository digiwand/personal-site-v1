/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeUIProvider } from 'theme-ui';

import 'styles/global.scss';
import theme from 'styles/theme/index';

import FadeInLayout from 'components/FadeInLayout';
import GlobalUtilStyles from 'components/GlobalUtilStyles';
import Loader from 'components/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeUIProvider theme={theme}>
      <GlobalUtilStyles />
      <Loader finishLoading={() => setIsLoading(false)} />
      <FadeInLayout isLoading={isLoading}>
        <Component {...pageProps} />
      </FadeInLayout>
    </ThemeUIProvider>
  );
}
