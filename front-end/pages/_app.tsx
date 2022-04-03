import { useState } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/base.scss';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'components/Layout/Layout';
import Context from '../context/context';

const Named = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <Context>
            <QueryClientProvider client={queryClient}>             
                <ReactQueryDevtools initialIsOpen={false} />
                <Hydrate state={pageProps.dehydratedState}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Hydrate>             
            </QueryClientProvider>
            </Context>
        
    );
};

export default Named;
