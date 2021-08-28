import { ThemeProvider } from 'theme-ui';
import theme from 'styles/theme/index';
import 'styles/global.scss';

import FadeInLayout from 'components/FadeInLayout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <FadeInLayout>
        <Component {...pageProps} />
      </FadeInLayout>
    </ThemeProvider>
  );
}
