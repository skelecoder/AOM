# Elasticsearch service

author: anton.wolter@telekom.de

---

The Elasticsearch service work as the interface to Elasticsearch. It is recommended to design the service as a class. It can and must **ONLY** be used server-side. Therefore the whole app should include server functionality. Using the next.js framework for react applications you can call the following inside of a pages-file to pass the Elasticsearch data as props to the page before rendering:

```javascript
export const getServerSideProps: GetServerSideProps<ExamplePageProps> = async () => {
    // call data from Elasticsearch service, e.g.:
    const es = new ElasticsearchService();
    const testData: TestDataType = await es.getTestData();
    return { props: { testData } };
};
```

To implement the connection inside of the Elasticsearch serive you have to import the node.js elasticsearch client:

```javascript
import { Client } from '@elastic/elasticsearch';
```

For the Elasticsearch service itself provide a private attribute for the Elasticsearch connection which has to be initialized in the class cunstructor:

```javascript
class ElasticsearchService {
    private client: Client;
    public constructor() {
        const node = 'http://' + (process.env.ELASTICSEARCH_HOST || 'localhost') + ':9200';
        // it is recommended to pass host with environment variables
        this.client = new Client({ node });
    }
    ...
}
```

An example request to the Elasticsearch instance can be defined as follows:

```javascript
    public getTestData: () => Promise<TestDataType> = async () =>
        (await this.client.search({ index: 'test-index' })).body.hits.hits;
```

## Typing

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/typescript.html

## Data Structures

The Type Definition file [types.d.ts](./types.d.ts) is supposed to define the structure of the data from APIs (e.g. elasticsearch) the full frontend application depends on.

## Mock Data

In the archive [mock-data](./mock-data) is supposed to provide test data according to the defined data structures in `types.d.ts`. The goal is to replace them 1 to 1 with the real data seamlessly.
