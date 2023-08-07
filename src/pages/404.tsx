import { Heading, ThemeUICSSObject } from 'theme-ui';
import Layout from 'components/Layout';

const pageStyle: ThemeUICSSObject = {
  minHeight: '100vh',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

function Custom404() {
  return (
    <Layout>
      <div sx={pageStyle}>
        <Heading as="h1">Whoops. Page Not Found.</Heading>
        <Heading as="h3" sx={{ pt: 4 }}>
          Try using the navigation to go to a new page.
        </Heading>
      </div>
    </Layout>
  );
}

export default Custom404;