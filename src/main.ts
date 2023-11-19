import axios from "axios";
import { FILE_PATH } from "../config";
import {calculateSHA256} from "./calculateHash";
import hashLookup from "./hashLookup";
import {uploadFile} from "./uploadFile";
import {pollApi} from "./pollApi";
import {displayResults} from "./displayResults";

async function main() {
    try {
        const hashFile = await calculateSHA256(FILE_PATH);
        console.log(`File SHA-256: ${hashFile}`);

        const lookupResult = await hashLookup(hashFile);

        if (lookupResult) {
            console.log('Results found in cache:');
            displayResults(lookupResult);
        } else {
            console.log('No results found in cache!');
            const data_id = await uploadFile();
            console.log(`File uploaded successfully. Data ID: ${data_id}`);

            console.log('Polling results.');
            const result = await pollApi(data_id);
            console.log('Results received:');
            console.log(result);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();