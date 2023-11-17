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
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
function hashLookup(hash_file, base_url = config_1.BASE_URL) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "${base_url}/hash/${hash_file}";
        const headers = { "apikey": config_1.API_KEY };
        try {
            const response = yield axios_1.default.get(url, { headers });
            if (response.status === 200) {
                return response.data;
            }
            else if (response.status === 404) {
                return null;
            }
            else {
                throw new Error('Error: ${response.status}');
            }
        }
        catch (error) {
            console.error("Error: Hash was not found.");
        }
    });
}
exports.default = hashLookup;