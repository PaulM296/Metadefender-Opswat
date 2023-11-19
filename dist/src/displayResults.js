"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayResults = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
function displayResults(response) {
    const details = response.data.scan_results.scan_details;
    console.log("Filename: " + path_1.default.basename(config_1.FILE_PATH));
    Object.entries(details).forEach(([name, info]) => {
        console.log("Engine: " + name);
        console.log("ThreatFound: " + info.threat_found);
        console.log("ScanResult: " + info.scan_result_i);
        console.log("DefTime: " + info.def_time);
    });
}
exports.displayResults = displayResults;
