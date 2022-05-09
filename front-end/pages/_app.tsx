import { useState } from 'react';
import type { AppProps } from 'next/app';
import '../styles/base.scss';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout/Layout';
import Context from '../context/context';
import { SessionProvider } from 'next-auth/react';

const Named = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <SessionProvider session={session}>
            <Context>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Hydrate>
                </QueryClientProvider>
            </Context>
        </SessionProvider>
    );
};

export default Named;
