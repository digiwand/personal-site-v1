import Layout from 'components/Layout';
import { Themed, ThemeUICSSObject } from 'theme-ui';

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
        <Themed.h1>Whoops. Page Not Found.</Themed.h1>
        <Themed.h3 sx={{ pt: 4 }}>
          Try using the navigation to go to a new page.
        </Themed.h3>
      </div>
    </Layout>
  );
}

export default Custom404;
