import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';


import Dashboard from 'components/dashboard/Dashboard';

const Index = (props: any) => <Dashboard articles={props.articles} reception={props} delivery={props} />;
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();
    // const articles = await ItemRepository.findAllRaw({
    //     include: {
    //         required: true,
    //     },
    // });
    return {
        props: {
            articles: null,
        },
    };
};

export default Index;
