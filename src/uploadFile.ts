import { FILE_PATH, BASE_URL, API_KEY } from "../config";
import * as fs from "fs";
import FormData from "form-data";
import axios from "axios";

export async function uploadFile(): Promise<string> {
    const url = `${BASE_URL}/file`;
    const headers = { "apikey": API_KEY };
    const fileContent = await fs.createReadStream(FILE_PATH);

    const formData = new FormData();
    formData.append("file", fileContent, {filename: FILE_PATH});

    try {
        const response = await axios.post(url, formData, { headers });

        if(response.status === 200) {
            return response.data.data_id;
        } else  {
            console.error(`Error: ${response.status}`);
            process.exit(1);
        }
    } catch (error) {
        console.error("Upload Error!");
        process.exit(1);
    }
}