import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/base.scss';
import Layout from 'components/Layout/Layout';

const Named = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
export default Named;
