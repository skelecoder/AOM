import { Client } from '@elastic/elasticsearch';

class ElasticsearchService {
    private client: Client;
    public constructor() {
        const node = 'http://' + (process.env.ELASTICSEARCH_HOST || 'localhost') + ':9200';
        // it is recommended to pass host with environment variables
        this.client = new Client({ node });
    }

    public getMortsEnAccidentDeTransit: () => Promise<MortsEnAccidentDeTransit[]> = async () =>
        (await this.client.search({ index: 'morts-en-accident-de-transit' })).body.hits.hits.map(
            (each) => each._source,
        );
}
export default ElasticsearchService;
