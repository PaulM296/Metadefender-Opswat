"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const calculateHash_1 = require("./calculateHash");
const hashLookup_1 = __importDefault(require("./hashLookup"));
const uploadFile_1 = require("./uploadFile");
const pollApi_1 = require("./pollApi");
const displayResults_1 = require("./displayResults");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashFile = yield (0, calculateHash_1.calculateSHA256)(config_1.FILE_PATH);
            console.log(`File SHA-256: ${hashFile}`);
            const lookupResult = yield (0, hashLookup_1.default)(hashFile);
            if (lookupResult) {
                console.log('Results found in cache:');
                (0, displayResults_1.displayResults)(lookupResult);
            }
            else {
                console.log('No results found in cache!');
                const data_id = yield (0, uploadFile_1.uploadFile)();
                console.log(`File uploaded successfully. Data ID: ${data_id}`);
                console.log('Polling results.');
                const result = yield (0, pollApi_1.pollApi)(data_id);
                console.log('Results received:');
                console.log(result);
            }
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }
    });
}
main();
