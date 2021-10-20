import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/base.scss';

const Named = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default Named;
