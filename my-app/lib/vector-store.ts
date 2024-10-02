import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import {env} from "./config";
const { PineconeStore } = require("langchain/vectorstores/pinecone");


interface CustomDoc {
    content: Record<string, any>;
  }
  
export async function embedAndStoreDocs(
    client: Pinecone,
    docs: CustomDoc[],
) {
    try {
        const embeddings = new OpenAIEmbeddings();
        const index = client.Index(env.PINECONE_INDEX_NAME);
        await PineconeStore.fromDocuments(docs, embeddings, {
            pineconeIndex: index,
            namespace: env.PINECONE_NAME_SPACE,
            textKey: "text",
        });

    } catch (e) {
        console.log("Error", e);
        throw new Error("Failed to load your docs");
    }
}

