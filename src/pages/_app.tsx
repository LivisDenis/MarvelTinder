import Head from 'next/head';
import type { AppType } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '../utils/trpc';

import '../styles/globals.css';
import Layout from '../components/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
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
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
};

export default trpc.withTRPC(MyApp);
