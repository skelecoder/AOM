import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';
import MongodbService from 'lib/mongodb';

const uri = process.env.MONGODB_URI;

const Index = (props: any) => <h1>Index</h1>;

export const getServerSideProps: GetServerSideProps<any> = async () => {
    // const mongo = new MongodbService();

    // const articles = await mongo.getArticles();
    
    return {
        props: {
            // articles: JSON.parse(JSON.stringify(articles)),
        },
    };
};

export default Index;
