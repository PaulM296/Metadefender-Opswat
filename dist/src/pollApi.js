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
exports.pollApi = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
const displayResults_1 = require("./displayResults");
function pollApi(data_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${config_1.BASE_URL}/file/${data_id}`;
        const headers = { 'apikey': config_1.API_KEY };
        while (true) {
            try {
                const response = yield axios_1.default.get(url, { headers });
                if (response.status === 200) {
                    const result = response.data.scan_results.scan_all_result_a;
                    if (result !== "In Progress") {
                        (0, displayResults_1.displayResults)(response);
                        process.exit(1);
                    }
                }
            }
            catch (error) {
                console.error("Poll Error!");
                process.exit(1);
            }
            yield new Promise(resolve => setTimeout(resolve, 10000));
        }
    });
}
exports.pollApi = pollApi;
