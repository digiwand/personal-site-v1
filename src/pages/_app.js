import { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'styles/theme/index';
import 'styles/global.scss';

import FadeInLayout from 'components/FadeInLayout';
import Loader from 'components/Loader';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Loader finishLoading={() => setIsLoading(false)} />
      <FadeInLayout isLoading={isLoading}>
        <Component {...pageProps} />
      </FadeInLayout>
    </ThemeProvider>
  );
}
