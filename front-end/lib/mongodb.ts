import { MongoClient } from 'mongodb';

class MongodbService {
    private client: MongoClient;
    public constructor() {
        const uri = process.env.MONGODB_URI;
        // it is recommended to pass host with environment variables
        this.client = new MongoClient(uri);
    }

    public getArticles: () => Promise<any> = async () => {
        await this.client.connect();
        const database = this.client.db('admin');
        const collection = database.collection('system.users');
        return collection.findOne({ user: 'root' });
    };
}
export default MongodbService;
