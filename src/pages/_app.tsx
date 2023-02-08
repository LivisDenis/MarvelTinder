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
const MyApp: AppType = ({ Component, pageProps }) => (
  <Layout>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </Layout>
);

export default trpc.withTRPC(MyApp);
