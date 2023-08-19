import React, { useState } from 'react';

import { ThemeUIProvider } from 'theme-ui';

import 'styles/global.scss';
import theme from 'styles/theme/index';

import FadeInLayout from 'components/FadeInLayout';
import GlobalUtilStyles from 'components/GlobalUtilStyles';
import Loader from 'components/Loader';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body>
        <ThemeUIProvider theme={theme}>
          <GlobalUtilStyles />
          <Loader finishLoading={() => setIsLoading(false)} />
          <FadeInLayout isLoading={isLoading}>
            {children}
          </FadeInLayout>
        </ThemeUIProvider>
      </body>
    </html>
  );
}
