import { AxiosResponse } from "axios";
import { Engine } from "./interfaces/Engine";
import path from "path";
import { FILE_PATH } from "../config";

export function displayResults(response: AxiosResponse) {
    const details = response.data.scan_results.scan_details as {
        [engine: string]: Engine;
    };

    console.log("Filename: " + path.basename(FILE_PATH));

    Object.entries(details).forEach(([name, info]) => {
        console.log("Engine: " + name);
        console.log("ThreatFound: " + info.threat_found);
        console.log("ScanResult: " + info.scan_result_i);
        console.log("DefTime: " + info.def_time);
    })
}