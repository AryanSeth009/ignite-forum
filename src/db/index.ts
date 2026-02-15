import { env } from '@/env.mjs';
import { MongoClient } from 'mongodb';

declare global {
    // eslint-disable-next-line no-var
    var __mongoClientPromise: Promise<MongoClient> | undefined;
}

const getMongoClientPromise = () => {
    if (!global.__mongoClientPromise) {
        const client = new MongoClient(env.MONGODB_URI);
        global.__mongoClientPromise = client.connect();
    }
    return global.__mongoClientPromise;
};

export const mongoClientPromise = getMongoClientPromise();

export const getMongoDb = async (dbName = 'ignite_forum_department') => {
    const client = await mongoClientPromise;
    return client.db(dbName);
};

export const db: any = undefined as any;
