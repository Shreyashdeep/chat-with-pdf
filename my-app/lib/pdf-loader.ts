
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"; // Updated to ES6 import

import {env} from "./config";


export async function getChunkedDocsFromPDF() {
    try {
        const loader = new PDFLoader(env.PDF_PATH);
        const docs = await loader.load();

        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });

        const chunkedDocs = await textSplitter.splitDocuments(docs);
        return chunkedDocs;
    } catch (e) {
        console.log(e);
        throw new Error("PDF chunking failed");
        
    }
}