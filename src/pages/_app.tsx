import Head from 'next/head';
import type { AppType } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { trpc } from '../utils/trpc';
import Layout from '../components/Layout';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  const seo = {
    title: 'MarvelTinder ☄️',
    description: 'Do you like them all ☄️ ?'
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
};

export default trpc.withTRPC(MyApp);
