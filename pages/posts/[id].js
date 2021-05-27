import Head from 'next/head';
import Date from '../../components/common/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: await getPostData(params.id),
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}