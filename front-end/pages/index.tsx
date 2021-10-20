import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';

import dynamic from 'next/dynamic';
const MapComponent = dynamic(() => import('components/smart-city-components/map'), {
    ssr: false,
});

const Index = (props: any) => <>Hello World</>;
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();

    return {
        props: {},
    };
};

export default Index;
