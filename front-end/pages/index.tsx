import React from 'react';
import { GetServerSideProps } from 'next';
import ElasticsearchService from 'data/elasticsearch-service';
import clientPromise from 'lib/mongodb'


import Dashboard from 'components/dashboard/Dashboard';

const Index = (props: any) => <Dashboard articles={props.articles} reception={props} delivery={props} />;
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const es = new ElasticsearchService();
//     const client = await clientPromise

//   // client.db() will be the default database passed in the MONGODB_URI
//   // You can change the database by calling the client.db() function and specifying a database like:
//   // const db = client.db("myDatabase");
//   // Then you can execute queries against your database like so:
//   // db.find({}) or any of the MongoDB Node Driver commands

//   const isConnected = await client.isConnected()
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
