import { useState } from 'react';

import 'styles/global.scss';
import 'styles/globals.css';

import FadeInLayout from 'components/FadeInLayout';
import Loader from 'components/Loader';
import { ThemeProvider } from 'theme/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Loader finishLoading={() => setIsLoading(false)} />
          <FadeInLayout isLoading={isLoading}>
            {children}
          </FadeInLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
