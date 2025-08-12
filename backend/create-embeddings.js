// Generate embeddings from an existing collection in Atlas.
// 1. Connect to Atlas cluster.
// 2. Get a documents from the <database>.<collection> terra-blog.posts collection that have a non-empty <blog text> field.
// 3. Generate embeddings from each document's <blog text> field by using the getEmbedding function
// 4. Update each document with a new embedding field that contains the embedding value by using the MongoDB Node.js Driver
// 5. Convert your embeddings to BSON binData vectors.

import { MongoClient } from 'mongodb';
import { getEmbedding } from './get-embeddings.js';
import { convertEmbeddingsToBSON } from './convert-embeddings.js';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

async function run() {
    // Connect to your Atlas cluster
    const client = new MongoClient(process.env.ATLAS_CONNECTION_STRING);
    try {
        await client.connect();
        const db = client.db("terra-blog");
        const collection = db.collection("posts");
        // Filter to exclude null or empty content fields
        const filter = { "content": { "$nin": [ null, "" ] } };
        // Get documents from the collection
        const documents = await collection.find(filter).toArray();
        console.log("Generating embeddings and updating documents...");
        const updateDocuments = [];
        await Promise.all(documents.map(async doc => {
            // Generate an embedding using the function that you defined
            var embedding = await getEmbedding(doc.content);
            // Convert the generated embedding into BSON format
            const bsonEmbedding = await convertEmbeddingsToBSON([embedding]); // Since convertEmbeddingsToBSON is designed to handle arrays
            embedding = bsonEmbedding; // Use BSON embedding instead of the original float32 embedding
             
            // Add the embedding to an array of update operations
            updateDocuments.push(
                {
                    updateOne: { 
                        filter: { "_id": doc._id },
                        update: { $set: { "vector": embedding } }
                    }
                }
           )
       }));
       // Continue processing documents if an error occurs during an operation
       const options = { ordered: false };
       // Update documents with the new embedding field
       const result = await collection.bulkWrite(updateDocuments, options);
       console.log("Count of documents updated: " + result.modifiedCount);
            
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);