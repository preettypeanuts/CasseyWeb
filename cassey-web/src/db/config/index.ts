import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const connectionUri = process.env.MONGO_CONNECTION_URI

if (!connectionUri) throw new Error("Connection String is not available")

let client: MongoClient
export const getMongoClientInstance = async () => {
    if(!client) {
        client = new MongoClient(connectionUri)
        await client.connect()
    }
    return client
}
