// Script to generate vector embeddings

import { pipeline } from '@xenova/transformers';
// Function to generate embeddings for a given data source
///This code defines a function named getEmbedding to generate an embedding for a given input. This function specifies:
//The feature-extraction task from Hugging Face's transformers.js library. To learn more, see Tasks.
//The nomic-embed-text-v1 embedding model.
export async function getEmbedding(data) {
    const embedder = await pipeline(
        'feature-extraction', 
        'Xenova/nomic-embed-text-v1');
    const results = await embedder(data, { pooling: 'mean', normalize: true });
    return Array.from(results.data);
}