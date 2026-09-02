import Layout from 'components/Layout';

function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen min-w-full flex justify-center items-center flex-col">
        <h1>Whoops. Page Not Found.</h1>
        <h3 className="pt-32">
          Try using the navigation to go to a new page.
        </h3>
      </div>
    </Layout>
  );
}

export default Custom404;
