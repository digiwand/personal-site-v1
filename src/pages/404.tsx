import { ThemeUICSSObject } from 'theme-ui';
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
        <h1>Whoops. Page Not Found.</h1>
        <h3 sx={{ pt: 4 }}>
          Try using the navigation to go to a new page.
        </h3>
      </div>
    </Layout>
  );
}

export default Custom404;
