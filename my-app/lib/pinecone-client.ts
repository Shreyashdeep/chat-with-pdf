import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeClientInstance: Pinecone | null = null;

// Create pineconeIndex if it doesn't exist
// Initialize index and ready to be accessed.
async function initPineconeClient() {
  try {
  const pineconeClient = new Pinecone({
      apiKey: env.PINECONE_API_KEY,
    });
    const indexName = env.PINECONE_INDEX_NAME;

    const existingIndexes = await pineconeClient.listIndexes();

    return pineconeClient;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient();
  }

  return pineconeClientInstance;
}