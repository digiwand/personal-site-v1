import Layout from 'components/Layout';
import { Themed } from 'theme-ui';

function Custom404() {
  return (
    <Layout>
      <div sx={{
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      >
        <Themed.h1>Whoops. Page Not Found.</Themed.h1>
        <Themed.h3 sx={{ pt: 4 }}>
          Try using the navigation to go to a new page.
        </Themed.h3>
      </div>
    </Layout>
  );
}

export default Custom404;
