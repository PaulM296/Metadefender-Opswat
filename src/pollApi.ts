import { BASE_URL, API_KEY, FILE_PATH } from "../config";
import axios from "axios";
import {displayResults} from "./displayResults";


export async function pollApi(data_id: string): Promise<string> {
    const url = `${BASE_URL}/file/${data_id}`;
    const headers = { 'apikey': API_KEY };

    while(true) {
        try {
                const response = await axios.get(url, {headers});

                if(response.status === 200) {
                    const result = response.data.scan_results.scan_all_result_a;

                    if (result !== "In Progress") {
                        displayResults(response);
                        process.exit(1);
                    }
                }
            } catch (error) {
                console.error("Poll Error!");
                process.exit(1);
            }

        await new Promise(resolve => setTimeout(resolve, 10000));
    }
}
