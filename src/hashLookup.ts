import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

async function hashLookup(hash_file: string, base_url: string = BASE_URL): Promise<any | null> {
    const url = `${base_url}/hash/${hash_file}`;
    const headers = { "apikey": API_KEY };

    try {
        const response = await axios.get(url, {headers});
        console.log("RESPONSE STATUS: " + response.status);
        if(response.status === 200) {
            return response;
        } else if(response.status === 404) {
            return null;
        } else {
            throw new Error("Error: ${response.status}");
        }
    } catch(error) {
        console.error("Error: Hash was not found.")
    }
}

export default hashLookup;