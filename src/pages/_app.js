import { ThemeProvider } from 'theme-ui';
import theme from 'styles/theme';
import 'styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component { ...pageProps } />
    </ThemeProvider>
  )
}