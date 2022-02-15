import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';
import MongodbService from 'lib/mongodb';

const uri = process.env.MONGODB_URI;

import Dashboard from 'components/dashboard/Dashboard';

const Index = (props: any) => <Dashboard articles={props.articles} reception={props} delivery={props} />;


export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();
    const mongo = new MongodbService();

    const articles = await mongo.getArticles();
    
    return {
        props: {
            articles: JSON.parse(JSON.stringify(articles)),
        },
    };
};

export default Index;
