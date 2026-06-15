import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type CacheConnection = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
    mongooseConnection?: CacheConnection;
};

const cached = globalForMongoose.mongooseConnection ?? {
    conn: null,
    promise: null
};

globalForMongoose.mongooseConnection = cached;

export async function connectToDatabase(){
    if(!MONGODB_URI){
        throw new Error("Missing MONGODB_URI environment variable.");
    }

    if(cached.conn){
        return cached.conn;
    }

    cached.promise ??= mongoose.connect(MONGODB_URI,{
        dbName: process.env.MONGODB_DB ?? "budget_tracker"
    });

    cached.conn = await cached.promise;
    return cached.conn;
}